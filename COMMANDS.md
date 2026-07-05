# NSD Bot Command Reference

## Agent Management Commands

### /profile [agent]
View an agent's profile information
- Shows: Agent ID, Rank, Status, Directorate, Clearance Level, Hire Date, Notes
- Optional: specify agent to view, or view your own

### /assign <agent> <rank> <directorate>
Recruit a new agent to the organization
- Ranks available for both 1st and 2nd Directorates
- Assigns unique Agent ID
- Sets hire date automatically

### /status <agent> <status> [reason]
Update an agent's current status
- Statuses: Active, Inactive, Suspended, On Leave
- Optional reason will be logged

### /promote <agent> <new-rank>
Promote an agent to a higher rank
- Only accepts ranks higher than current
- Automatically adjusts clearance level
- Logs promotion with your name

---

## Case Files Commands

### /case-create <title> <description> [priority]
Create a new investigation case
- Auto-generates case number (NSD-XXXXXX)
- Priority levels: Critical, High, Normal, Low
- Case status starts as OPEN

### /evidence-log <case-number> <item-name> <description> [classification]
Log evidence item to a case
- Links evidence to case by case number
- Classification: Unclassified, Confidential, Secret, Top Secret
- Auto-logs who submitted evidence

### /case-update [implementation pending]
Update existing case details

### /case-close [implementation pending]
Close an investigation case

---

## Operations Commands

### /op-create <op-code> <title> <description>
Create a new operation/mission
- Op code must be unique
- Auto-generates operation ID
- Status starts as PLANNING

### /op-brief <op-code>
View full operation briefing
- Shows: Code, Title, Commander, Status, Objectives
- Lists all participants
- Shows start/end times if available

### /op-start [implementation pending]
Begin an operation

### /op-end [implementation pending]
Conclude an operation

---

## Intelligence Commands

### /intel-submit <title> <content> [classification] [threat-level]
Submit an intelligence report
- Classification: Unclassified, Confidential, Secret, Top Secret
- Threat Level: Critical, High, Medium, Low
- Auto-logs submitter

### /threat-level [implementation pending]
Update threat assessment

### /scan [implementation pending]
Scan for threats

---

## Permission Levels

- **Level 0** - All members (Trainees, Operatives)
- **Level 1** - Officers (Officers, Specialists)
- **Level 2** - Senior Officers (Senior Officers, Chiefs)
- **Level 3** - Directors and Command Staff
- **Level 4** - Executive Command only

---

## Status Indicators

- 🟢 Active / Open / Planning
- 🔴 Inactive / Closed / Completed
- 🟡 Suspended / Normal Priority
- 🟠 On Leave / High Priority
- 🔵 Operation in planning
- ⚫ Archived
- ✅ Verified / Completed
- ❌ Failed / Cancelled

---

## Coming Soon

- /demote - Reduce agent rank
- /case-update - Modify case details
- /case-close - Close investigation
- /op-start - Begin operation
- /op-end - Conclude operation
- /op-join - Join an operation
- /lockdown - Secure area
- /detain - Detain individual
- /release - Release individual
- /raid-start - Begin raid
- /raid-end - End raid
- /announcement - Post org-wide message
- /policy-update - Update org policy
- And more enforcement/command staff commands...

---

**Updated**: 2026-07-05
**Status**: Alpha Build - Core systems online
