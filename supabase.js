
const SUPABASE_URL = 'https://gmtnwlxbhooxhwwiqohe.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdtdG53bHhiaG9veGh3d2lxb2hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNTM4NTMsImV4cCI6MjA2NDkyOTg1M30.p8ZxxACaKy-Lmv34gyJABDVFfDSW4G3Z_Wk2LZC5VGY'; // 替换成你的真实 anon key

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
