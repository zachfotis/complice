'use client';

import { customThemeDatePickers } from '@/utils/theme';
import { ThemeProvider } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { el } from 'date-fns/locale';

interface DatePickerProps {
  value: Date | undefined;
  onChange: (newValue: Date) => void;
}

export default function BirthDate({ value, onChange }: DatePickerProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={el}>
      <ThemeProvider theme={customThemeDatePickers}>
        <DatePicker
          slotProps={{
            textField: {
              sx: {
                width: '100%',
                '& input': {
                  padding: '0.65rem 1.25rem',
                },
              },
            },
          }}
          name="birthdate"
          value={value}
          onChange={(newValue) => {
            if (newValue) onChange(new Date(newValue));
          }}
        />
      </ThemeProvider>
    </LocalizationProvider>
  );
}
