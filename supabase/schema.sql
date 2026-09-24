-- HYPERBARIC & RECOVERY LAB OS
-- SCHEMA V1.0.0 WITH ROW LEVEL SECURITY (RLS)

CREATE TABLE IF NOT EXISTS recovery_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  membership_tier TEXT DEFAULT 'non_member', -- non_member, contrast_club, longevity_core, bio_apex_vip
  hbot_credits INT DEFAULT 0,
  iv_credits INT DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS recovery_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  session_price NUMERIC(10,2) NOT NULL,
  duration_minutes INT NOT NULL,
  specs TEXT,
  active BOOLEAN DEFAULT true
);

CREATE TABLE IF NOT EXISTS suite_reservations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  member_id UUID REFERENCES recovery_members(id) ON DELETE CASCADE,
  service_id UUID REFERENCES recovery_services(id),
  chamber_or_suite TEXT NOT NULL, -- HBOT Pod A, HBOT Pod B, Contrast Bay 1, IV Lounge Suite 3
  reservation_time TIMESTAMP WITH TIME ZONE NOT NULL,
  status TEXT DEFAULT 'confirmed', -- confirmed, in_session, completed, cancelled
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE TABLE IF NOT EXISTS chamber_telemetry (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  chamber_name TEXT NOT NULL,
  sensor_metric TEXT NOT NULL, -- Pressure ATA, Plunge Temp F, Sauna Temp F, Oxygen Flow L/min
  metric_value NUMERIC(10,2) NOT NULL,
  logged_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ENABLE RLS
ALTER TABLE recovery_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE recovery_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE suite_reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE chamber_telemetry ENABLE ROW LEVEL SECURITY;

-- POLICIES
CREATE POLICY "Public services read" ON recovery_services FOR SELECT USING (true);
CREATE POLICY "Staff all access services" ON recovery_services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff all access members" ON recovery_members FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff all access reservations" ON suite_reservations FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Staff all access telemetry" ON chamber_telemetry FOR ALL USING (auth.role() = 'authenticated');
