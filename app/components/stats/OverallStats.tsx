import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

interface StatProps {
  label: string;
  value: number | string;
}

const StatItem: React.FC<StatProps> = ({ label, value }) => (
  <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
    <Typography variant="h6" component="div">
      {label}
    </Typography>
    <Typography variant="h4" component="div">
      {value}
    </Typography>
  </Paper>
);

interface OverallStatsProps {
  totalUsers: number;
  totalMessages: number;
  averageMessagesPerUser: number;
  activeUsersToday: number;
}

const OverallStats: React.FC<OverallStatsProps> = ({
  totalUsers,
  totalMessages,
  averageMessagesPerUser,
  activeUsersToday,
}) => {
  return (
    <Box sx={{ flexGrow: 1, mb: 