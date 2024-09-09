
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lqtugxcbuykanuydljqj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxdHVneGNidXlrYW51eWRsanFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyMDc5MjEsImV4cCI6MjA0MDc4MzkyMX0.QPv0GhGgOb6Ri1jzVZ2L7qaYIERvUoV3Sqeswqc0E_c';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;