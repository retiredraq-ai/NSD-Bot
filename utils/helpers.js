const crypto = require('crypto');

const generateId = (prefix) => {
  return `${prefix}-${crypto.randomBytes(4).toString('hex').toUpperCase()}`;
};

const formatTimestamp = (date = new Date()) => {
  return date.toISOString();
};

const getStatusEmoji = (status) => {
  const statusMap = {
    active: '🟢',
    inactive: '🔴',
    suspended: '🟡',
    on_leave: '🟠',
    open: '🟢',
    closed: '⚫',
    archived: '🟣',
    planning: '🔵',
    active_op: '🟢',
    completed: '✅',
    cancelled: '❌',
    pending: '⏳',
  };
  return statusMap[status] || '❓';
};

const getPriorityEmoji = (priority) => {
  const priorityMap = {
    critical: '🔴',
    high: '🟠',
    normal: '🟡',
    low: '🟢',
    urgent: '⚠️',
  };
  return priorityMap[priority] || '❓';
};

const getThreatLevelEmoji = (level) => {
  const levelMap = {
    critical: '🔴',
    high: '🟠',
    medium: '🟡',
    low: '🟢',
    minimal: '💚',
  };
  return levelMap[level] || '❓';
};

const getClearanceColor = (level) => {
  const colorMap = {
    1: 0x808080,        // Gray - Unclassified
    2: 0x00FF00,        // Green - Confidential
    3: 0xFFFF00,        // Yellow - Secret
    4: 0xFF6600,        // Orange - Top Secret
    5: 0xFF0000,        // Red - SCI
  };
  return colorMap[level] || 0x000000;
};

const truncate = (str, length = 100) => {
  return str.length > length ? str.substring(0, length - 3) + '...' : str;
};

module.exports = {
  generateId,
  formatTimestamp,
  getStatusEmoji,
  getPriorityEmoji,
  getThreatLevelEmoji,
  getClearanceColor,
  truncate,
};
