# National Security Directorate Bot

**A Discord-based agency management system for roleplay organizations.**

The NSD Bot is a comprehensive Discord bot designed to simulate intelligence operations, internal security workflows, and structured command hierarchies. It provides tools for managing agents, tracking investigations, logging intelligence reports, coordinating operations, and handling internal enforcement actions.

## ⚠️ Disclaimer

**This bot is not affiliated with any real-world agency and is strictly for roleplay and organizational use within Discord servers.**

---

## 🎯 Core Features

### 👤 Agent Management (Priority 1)
- Create and manage agent profiles
- Track agent status and assignments
- Manage security clearances
- Handle promotions and demotions
- View agent ID cards and service records

### 📁 Case Files (Priority 2)
- Create and update investigations
- Log evidence and findings
- Track suspects and leads
- Close cases with resolutions
- Maintain case history

### 🛰️ Operations (Priority 3)
- Create and coordinate operations/missions
- Brief team members on op objectives
- Start/end operations with participant tracking
- Issue lockdowns and evacuation orders
- Coordinate extractions

### 🧠 Intelligence
- Submit and request intelligence reports
- Add intelligence sources
- Scan for threats
- Set and update threat levels
- Decrypt classified information

---

## 📋 Rank Hierarchy

### Executive Command
- Director of National Security Directorate
- Deputy Director of NSD
- Chief of Staff
- Executive Operations Commander

### Command Staff
- Senior Operations Commander
- Operations Commander
- Assistant Operations Commander

### 1st Directorate (Intelligence)
- Director of 1st Directorate
- Deputy Director of 1st Directorate
- Chief Intelligence Officer
- Senior Intelligence Officer
- Intelligence Officer
- Intelligence Specialist
- Intelligence Analyst
- Intelligence Trainee

### 2nd Directorate (Operations)
- Director of 2nd Directorate
- Deputy Director of 2nd Directorate
- Chief Operations Officer
- Senior Operations Officer
- Operations Officer
- Operations Specialist
- Field Operative
- Operations Trainee

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+
- npm or yarn
- Discord Bot Token
- Discord Server ID

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/retiredraq-ai/NSD-Bot.git
   cd NSD-Bot
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Setup environment variables**
   \`\`\`bash
   cp .env.example .env
   \`\`\`
   Edit \`.env\` and add your:
   - \`DISCORD_TOKEN\` (from Discord Developer Portal)
   - \`CLIENT_ID\` (your bot's ID)
   - \`GUILD_ID\` (your server's ID)

4. **Initialize the database**
   \`\`\`bash
   npm run setup-db
   \`\`\`

5. **Start the bot**
   \`\`\`bash
   npm start
   \`\`\`

---

## 📋 Available Commands

### Agent Management
- \`/profile\` - View agent profile
- \`/assign\` - Recruit a new agent
- \`/status\` - Update agent status
- \`/promote\` - Promote agent rank

### Case Files
- \`/case-create\` - Create investigation case
- \`/evidence-log\` - Log case evidence

### Operations
- \`/op-create\` - Create operation
- \`/op-brief\` - View operation briefing

### Intelligence
- \`/intel-submit\` - Submit intelligence report

---

## 🔧 Discord Bot Setup

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and name it "NSD Bot"
3. Go to "Bot" section and click "Add Bot"
4. Copy the TOKEN and paste into your \`.env\` file
5. Enable these Intents:
   - Message Content Intent
   - Server Members Intent
6. Go to "OAuth2" → "URL Generator"
7. Select scopes: \`bot\` and \`applications.commands\`
8. Select permissions: Send Messages, Embed Links, Manage Roles
9. Copy the generated URL and invite bot to your server

---

## 📄 License

MIT License

---

**Made with ❤️ for NSD**
