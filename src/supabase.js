import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gsceualqdntlzpgdcjxi.supabase.co";
const supabaseKey = "sb_publishable_txTgY_1QrL2X-D5NcqPN1A_Wfr4hIGB";

export const supabase = createClient(supabaseUrl, supabaseKey);
