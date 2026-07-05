const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { getQuery } = require('../../utils/database');
const { getStatusEmoji } = require('../../utils/helpers');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('profile')
    .setDescription('View or create an agent profile')
    .addUserOption(option =>
      option.setName('agent')
        .setDescription('The agent to view (leave blank for yourself)')
        .setRequired(false)
    ),

  execute: async (interaction) => {
    await interaction.deferReply();

    const targetUser = interaction.options.getUser('agent') || interaction.user;
    const userId = targetUser.id;

    try {
      const agent = await getQuery('SELECT * FROM agents WHERE user_id = ?', [userId]);

      if (!agent) {
        return await interaction.editReply({
          content: `❌ No agent profile found for ${targetUser.username}. Use \`/assign\` to create one.`,
        });
      }

      const embed = new EmbedBuilder()
        .setTitle(`🪓 AGENT PROFILE - ${agent.username.toUpperCase()}`)
        .setColor(0x1f1f1f)
        .addFields(
          { name: '🆔 Agent ID', value: `\`${agent.agent_id}\``, inline: true },
          { name: '⭐ Rank', value: agent.rank, inline: true },
          { name: `${getStatusEmoji(agent.status)} Status`, value: agent.status.replace('_', ' ').toUpperCase(), inline: true },
          { name: '🏢 Directorate', value: agent.directorate || 'Unassigned', inline: true },
          { name: '📂 Division', value: agent.division || 'Unassigned', inline: true },
          { name: '🔐 Clearance Level', value: `Level ${agent.clearance_level}`, inline: true },
          { name: '📅 Hire Date', value: new Date(agent.hire_date).toLocaleDateString(), inline: false },
          { name: '📝 Profile Notes', value: agent.profile_notes || '*No notes on file*', inline: false }
        )
        .setThumbnail(targetUser.displayAvatarURL())
        .setFooter({ text: `Last updated: ${new Date(agent.updated_at).toLocaleString()}` });

      await interaction.editReply({ embeds: [embed] });
    } catch (error) {
      console.error('Profile command error:', error);
      await interaction.editReply({ content: '❌ An error occurred while fetching the profile.' });
    }
  },
};
