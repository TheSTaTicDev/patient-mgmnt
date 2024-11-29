import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://iudgbpmicegfvwnofqmx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1ZGdicG1pY2VnZnZ3bm9mcW14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4NjUzMzAsImV4cCI6MjA0ODQ0MTMzMH0.DyJUAAyZc8ZAaQGf0FoXK4XhpiJCjjlLMgpr2chC7qc'
export const supabase = createClient(supabaseUrl, supabaseKey)