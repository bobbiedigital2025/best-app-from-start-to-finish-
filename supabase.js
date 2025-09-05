// Example: Supabase integration
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE;
const supabase = createClient(supabaseUrl, supabaseKey);

async function logSignIn(user) {
  await supabase.from('signins').insert({ user, timestamp: new Date().toISOString() });
}

module.exports = { supabase, logSignIn };
