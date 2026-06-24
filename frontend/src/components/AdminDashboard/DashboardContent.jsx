import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import { MessageSquare, AlertTriangle, Bell, Users, Phone, User, Shield, ArrowRight } from 'lucide-react';

const hostels = [
  { name: 'Tilak Hostel', type: 'BOYS', warden: 'Mr. Ramesh Kumar', wardenPhone: '+919812345678', caretaker: 'Mr. Anil Verma', caretakerPhone: '+919800123456' },
  { name: 'Shastri Hostel', type: 'BOYS', warden: 'Mrs. Sunita Sharma', wardenPhone: '+919876543210', caretaker: 'Ms. Rekha Gupta', caretakerPhone: '+919800654321' },
  { name: 'Sarojini Hostel', type: 'GIRLS', warden: 'Mr. Dinesh Mehta', wardenPhone: '+919998887766', caretaker: 'Mr. Rajat Singh', caretakerPhone: '+919800987654' },
  { name: 'Malviya Hostel', type: 'BOYS', warden: 'Mr. Dinesh Mehta', wardenPhone: '+919998887766', caretaker: 'Mr. Rajat Singh', caretakerPhone: '+919800987654' },
  { name: 'Vivekanand Hostel', type: 'BOYS', warden: 'Mr. Dinesh Mehta', wardenPhone: '+919998887766', caretaker: 'Mr. Rajat Singh', caretakerPhone: '+919800987654' },
  { name: 'Patel Hostel', type: 'BOYS', warden: 'Mr. Dinesh Mehta', wardenPhone: '+919998887766', caretaker: 'Mr. Rajat Singh', caretakerPhone: '+919800987654' },
];

const emergency = [
  { title: 'Director', name: 'Dr. Rajeev Malhotra', phone: '+911100112233' },
  { title: 'Dean of Student Welfare', name: 'Prof. Neha Bansal', phone: '+911100445566' },
  { title: 'Medical Emergency', name: 'Campus Clinic', phone: '+911145678900' },
  { title: 'Security Helpdesk', name: 'Main Gate Security', phone: '+911123456789' },
  { title: 'Fire Emergency', name: 'Fire Station (Local)', phone: '101' },
];

const shortcuts = [
  { label: 'Feedback', path: '/admin/feedback', icon: MessageSquare, color: '#3b82f6' },
  { label: 'Complaints', path: '/admin/complaints', icon: AlertTriangle, color: '#ef4444' },
  { label: 'Notices', path: '/admin/notice', icon: Bell, color: '#d4af37' },
  { label: 'Societies', path: '/admin/societies', icon: Users, color: '#10b981' },
];

const DashboardContent = () => {
  const navigate = useNavigate();
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <style>{`
        .dc-hero { position:relative; width:100%; height:400px; overflow:hidden; }
        .dc-hero img { width:100%; height:100%; object-fit:cover; filter:brightness(25%) saturate(0.5); }
        .dc-hero-overlay { position:absolute; inset:0; display:flex; flex-direction:column;
          justify-content:center; align-items:center; text-align:center; padding:20px; }
        .dc-hero-badge { font-size:11px; letter-spacing:0.15em; text-transform:uppercase;
          color:var(--gold); font-weight:700; background:var(--gold-dim);
          border:1px solid var(--border-accent); padding:4px 14px; border-radius:99px; margin-bottom:18px; }
        .dc-hero h1 { font-family:var(--font-display); font-size:2.4rem; color:#fff; margin-bottom:10px; }
        .dc-hero p { color:rgba(255,255,255,0.55); font-size:14px; }
        .dc-sec { max-width:1200px; margin:0 auto; padding:52px 32px 0; }
        .dc-shortcuts { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; margin-bottom:48px; }
        .dc-sc { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius);
          padding:20px 18px; cursor:pointer; transition:all 0.2s; display:flex; align-items:center; gap:12px; }
        .dc-sc:hover { transform:translateY(-3px); border-color:var(--border-accent); }
        .dc-sc-icon { width:38px; height:38px; border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .dc-sc span { font-weight:600; font-size:14px; }
        .dc-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(300px,1fr)); gap:18px; }
        .dc-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius);
          padding:22px; animation:fadeUp 0.4s ease both; transition:all 0.2s; }
        .dc-card:hover { border-color:var(--border-accent); }
        .dc-badge-boys { display:inline-block; font-size:10px; letter-spacing:0.1em; text-transform:uppercase;
          padding:2px 8px; border-radius:99px; font-weight:700; margin-bottom:10px;
          background:rgba(59,130,246,0.15); color:#93c5fd; border:1px solid rgba(59,130,246,0.3); }
        .dc-badge-girls { display:inline-block; font-size:10px; letter-spacing:0.1em; text-transform:uppercase;
          padding:2px 8px; border-radius:99px; font-weight:700; margin-bottom:10px;
          background:rgba(244,114,182,0.15); color:#f9a8d4; border:1px solid rgba(244,114,182,0.3); }
        .dc-card h3 { font-family:var(--font-display); font-size:1.05rem; margin-bottom:12px; }
        .dc-row { display:flex; align-items:center; gap:7px; font-size:12.5px; margin-bottom:6px; }
        .dc-row span { color:var(--text-muted); font-size:11px; text-transform:uppercase; min-width:60px; letter-spacing:0.04em; }
        .dc-row a { color:var(--gold); }
        .dc-emg { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius);
          padding:20px 22px; animation:fadeUp 0.4s ease both; transition:all 0.2s;
          border-left:3px solid #ef4444; }
        .dc-emg:hover { border-color:rgba(239,68,68,0.4); }
        .dc-emg h4 { font-size:14px; font-weight:600; margin-bottom:4px; }
        .dc-emg p { color:var(--text-secondary); font-size:13px; margin-bottom:8px; }
        .dc-emg a { color:#f87171; font-size:13px; font-weight:600; display:flex; align-items:center; gap:5px; }
        @media(max-width:900px) { .dc-shortcuts { grid-template-columns:repeat(2,1fr); } }
        @media(max-width:600px) { .dc-shortcuts { grid-template-columns:1fr 1fr; } .dc-sec { padding:32px 16px 0; } }
      `}</style>

      <div className="dc-hero">
        <img src="/college.jpg" alt="RKGIT" />
        <div className="dc-hero-overlay">
          <span className="dc-hero-badge">Admin Dashboard</span>
          <h1>RKGIT Hostel Administration</h1>
          <p>Manage hostels, students and facilities from one place</p>
        </div>
      </div>

      <div className="dc-sec">
        <div style={{ marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '3px', background: 'var(--gold)', borderRadius: '2px', marginBottom: '12px' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '4px' }}>Quick Access</h2>
        </div>
        <div className="dc-shortcuts">
          {shortcuts.map(({ label, path, icon: Icon, color }) => (
            <div key={path} className="dc-sc" onClick={() => navigate(path)}>
              <div className="dc-sc-icon" style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                <Icon size={18} color={color} />
              </div>
              <span>{label}</span>
              <ArrowRight size={14} color="var(--text-muted)" style={{ marginLeft: 'auto' }} />
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '3px', background: 'var(--gold)', borderRadius: '2px', marginBottom: '12px' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '4px' }}>Hostel Overview</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '13px' }}>All hostels at a glance</p>
        </div>
        <div className="dc-grid">
          {hostels.map((h, i) => (
            <div key={i} className="dc-card" style={{ animationDelay: `${i * 0.07}s` }}>
              <span className={h.type === 'GIRLS' ? 'dc-badge-girls' : 'dc-badge-boys'}>{h.type}</span>
              <h3>{h.name}</h3>
              <div className="dc-row"><User size={12} color="var(--text-muted)" /><span>Warden</span>
                <span style={{ color: 'var(--text-primary)', fontSize: '12.5px' }}>{h.warden}</span>·
                <a href={`tel:${h.wardenPhone}`}>{h.wardenPhone}</a></div>
              <div className="dc-row"><Shield size={12} color="var(--text-muted)" /><span>Caretaker</span>
                <span style={{ color: 'var(--text-primary)', fontSize: '12.5px' }}>{h.caretaker}</span>·
                <a href={`tel:${h.caretakerPhone}`}>{h.caretakerPhone}</a></div>
            </div>
          ))}
        </div>

        <div style={{ margin: '52px 0 24px' }}>
          <div style={{ width: '40px', height: '3px', background: '#ef4444', borderRadius: '2px', marginBottom: '12px' }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '4px' }}>Emergency Contacts</h2>
        </div>
        <div className="dc-grid" style={{ paddingBottom: '0' }}>
          {emergency.map((e, i) => (
            <div key={i} className="dc-emg" style={{ animationDelay: `${i * 0.07}s` }}>
              <h4>{e.title}</h4>
              <p>{e.name}</p>
              <a href={`tel:${e.phone}`}><Phone size={13} />{e.phone}</a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardContent;
