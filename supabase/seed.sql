-- SEED DATA FOR HYPERBARIC & RECOVERY LAB OS

INSERT INTO recovery_services (slug, title, category, session_price, duration_minutes, specs) VALUES
('thermal-contrast-circuit', 'Thermal Contrast Circuit (Fire & Ice)', 'VASODILATION & HRV', 75.00, 50, '38°F Plunge / 212°F Finnish Sauna'),
('hyperbaric-oxygen-hbot', 'Hard-Shell Hyperbaric Oxygen (HBOT 2.0 ATA)', 'CELLULAR HYPOXIA REVERSAL', 165.00, 60, '2.0 ATA Pressure / 100% Medical O2'),
('cellular-nad-iv-lounge', 'Cellular NAD+ & Micronutrient IV Lounge', 'INTRACELLULAR ATP INFUSION', 295.00, 90, '500mg NAD+ / Glutathione Push'),
('red-light-photobiomodulation', 'Full-Body Red Light & PBM Photobiomodulation', 'MITOCHONDRIAL PHOTONIC', 65.00, 20, '660nm + 850nm / 120 mW/cm²');

INSERT INTO recovery_members (full_name, email, phone, membership_tier, hbot_credits, iv_credits) VALUES
('Alexander Wright', 'alexander.wright@example.com', '+1 (555) 789-0123', 'bio_apex_vip', 8, 2),
('Seraphina Fox', 'seraphina.fox@example.com', '+1 (555) 654-3210', 'contrast_club', 0, 0),
('Dr. Henrik Meyer', 'dr.meyer@example.com', '+1 (555) 987-6543', 'longevity_core', 3, 1);

INSERT INTO chamber_telemetry (chamber_name, sensor_metric, metric_value) VALUES
('HBOT Pod A', 'Pressure ATA', 2.0),
('Glacier Plunge 1', 'Temperature F', 38.4),
('Cedar Sauna Suite 1', 'Temperature F', 212.0);
