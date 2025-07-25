// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pvpdgsmmpggsfxxamcms.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB2cGRnc21tcGdnc2Z4eGFtY21zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxODc5NzIsImV4cCI6MjA2Nzc2Mzk3Mn0.IsQJaJQLYllwpbFrDGNtr1nz9hflnjjJIVWQkdtTbAA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});