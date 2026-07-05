const { SlashCommandBuilder } = require('discord.js');
const { getQuery, runQuery } = require('../../utils/database');
const { generateId, formatTimestamp } = require('../../utils/helpers');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('assign')
    .setDescription('Assign a new agent to a rank and directorate')
    .addUserOption(option =>
      option.setName('agent')
        .setDescription('The user to assign')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('rank')
        .setDescription('The rank to assign')
        .setRequired(true)
        .addChoices(
          { name: 'Intelligence Trainee', value: 'Intelligence Trainee' },
          { name: 'Intelligence Analyst', value: 'Intelligence Analyst' },
          { name: 'Intelligence Specialist', value: 'Intelligence Specialist' },
          { name: 'Intelligence Officer', value: 'Intelligence Officer' },
          { name: 'Senior Intelligence Officer', value: 'Senior Intelligence Officer' },
          { name: 'Chief Intelligence Officer', value: 'Chief Intelligence Officer' },
          { name: 'Operations Trainee', value: 'Operations Trainee' },
          { name: 'Field Operative', value: 'Field Operative' },
          { name: 'Operations Specialist', value: 'Operations Specialist' },
          { name: 'Operations Officer', value: 'Operations Officer' },
          { name: 'Senior Operations Officer', value: 'Senior Operations Officer' },
          { name: 'Chief Operations Officer', value: 'Chief Operations Officer' }
        )
    )
    .addStringOption(option =>
      option.setName('directorate')
        .setDescription('The directorate')
        .setRequired(true)
        .addChoices(
          { name: '1st Directorate (Intelligence)', value: '1st Directorate' },
          { name: '2nd Directorate (Operations)', value: '2nd Directorate' }
        )
    ),

  execute: async (interaction) => {
    await interaction.deferReply();

    const targetUser = interaction.options.getUser('agent');
    const rank = interaction.options.getString('rank');
    const directorate = interaction.options.getString('directorate');

    try {
      const existingAgent = await getQuery('SELECT * FROM agents WHERE user_id = ?', [targetUser.id]);

      if (existingAgent) {
        return await interaction.editReply({
          content: `❌ ${targetUser.username} already has an agent profile.`,
        });
      }

      const agentId = generateId('AGT');
      const now = formatTimestamp();

      await runQuery(
        `INSERT INTO agents (agent_id, user_id, username, rank, directorate, status, hire_date, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [agentId, targetUser.id, targetUser.username, rank, directorate, 'active', now, now, now]
      );

      await interaction.editReply({
        content: `✅ ${targetUser.username} has been assigned to **${rank}** in the **${directorate}**.\n**Agent ID**: \`${agentId}\``,
      });
    } catch (error) {
      console.error('Assign command error:', error);
      await interaction.editReply({ content: '❌ An error occurred while assigning the agent.' });
    }
  },
};
