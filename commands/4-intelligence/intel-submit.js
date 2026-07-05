const { SlashCommandBuilder } = require('discord.js');
const { runQuery } = require('../../utils/database');
const { generateId, formatTimestamp } = require('../../utils/helpers');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('intel-submit')
    .setDescription('Submit an intelligence report')
    .addStringOption(option =>
      option.setName('title')
        .setDescription('Report title')
        .setRequired(true)
    )
    .addStringOption(option =>
      option.setName('content')
        .setDescription('Report content')
        .setRequired(true)
        .setMaxLength(1000)
    )
    .addStringOption(option =>
      option.setName('classification')
        .setDescription('Classification level')
        .setRequired(false)
        .addChoices(
          { name: 'Unclassified', value: 'unclassified' },
          { name: 'Confidential', value: 'confidential' },
          { name: 'Secret', value: 'secret' },
          { name: 'Top Secret', value: 'top_secret' }
        )
    )
    .addStringOption(option =>
      option.setName('threat-level')
        .setDescription('Threat level assessment')
        .setRequired(false)
        .addChoices(
          { name: '🔴 Critical', value: 'critical' },
          { name: '🟠 High', value: 'high' },
          { name: '🟡 Medium', value: 'medium' },
          { name: '🟢 Low', value: 'low' }
        )
    ),

  execute: async (interaction) => {
    await interaction.deferReply();

    const title = interaction.options.getString('title');
    const content = interaction.options.getString('content');
    const classification = interaction.options.getString('classification') || 'secret';
    const threatLevel = interaction.options.getString('threat-level') || 'medium';

    try {
      const intelId = generateId('INTEL');
      const now = formatTimestamp();

      await runQuery(
        `INSERT INTO intelligence (intel_id, title, content, submitted_by, classification, threat_level, submitted_at)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [intelId, title, content, interaction.user.id, classification, threatLevel, now]
      );

      await interaction.editReply({
        content: `✅ **Intelligence Report Submitted**\n\n📋 **Title**: ${title}\n🔐 **Classification**: ${classification.replace('_', ' ').toUpperCase()}\n⚠️ **Threat Level**: ${threatLevel.toUpperCase()}\n👤 **Submitted by**: ${interaction.user.username}`,
      });
    } catch (error) {
      console.error('Intel submit error:', error);
      await interaction.editReply({ content: '❌ An error occurred while submitting the report.' });
    }
  },
};
