import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';

const url = 'https://qnnwqcoknwpeungfiupu.supabase.co';
const key =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFubndxY29rbndwZXVuZ2ZpdXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI2MDI0MzcsImV4cCI6MTk5ODE3ODQzN30.MO7TxTKSlEnyNSsIfRrDpTmHgiZC9QdgfkqSX4r_PVc';
export const client = createClient(url, key);
