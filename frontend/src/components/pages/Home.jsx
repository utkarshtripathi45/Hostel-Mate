import React from 'react';
import Footer from '../Footer';
import { Phone, User, Shield, Wifi, Coffee } from 'lucide-react';

const hostels = [
  { name: 'Tilak Hostel', type: 'BOYS', description: 'Excellent amenities with 24/7 security. Wi-Fi, mess facilities and separate rooms.',
    warden: 'Mr. Ramesh Kumar', wardenPhone: '+919812345678', caretaker: 'Mr. Anil Verma', caretakerPhone: '+919800123456' },
  { name: 'Shastri Hostel', type: 'BOYS', description: 'Single and double occupancy rooms with Wi-Fi, mess, and 24/7 security.',
    warden: 'Mrs. Sunita Sharma', wardenPhone: '+919876543210', caretaker: 'Ms. Rekha Gupta', caretakerPhone: '+919800654321' },
  { name: 'Sarojini Hostel', type: 'GIRLS', description: 'Modern facilities, peaceful environment with Wi-Fi, mess, and recreational area.',
    warden: 'Mr. Dinesh Mehta', wardenPhone: '+919998887766', caretaker: 'Mr. Rajat Singh', caretakerPhone: '+919800987654' },
  { name: 'Malviya Hostel', type: 'BOYS', description: 'Good environment with Wi-Fi, mess, and all essential amenities.',
    warden: 'Mr. Dinesh Mehta', wardenPhone: '+919998887766', caretaker: 'Mr. Rajat Singh', caretakerPhone: '+919800987654' },
  { name: 'Vivekanand Hostel', type: 'BOYS', description: 'Good environment with Wi-Fi, mess, and all essential amenities.',
    warden: 'Mr. Dinesh Mehta', wardenPhone: '+919998887766', caretaker: 'Mr. Rajat Singh', caretakerPhone: '+919800987654' },
  { name: 'Patel Hostel', type: 'BOYS', description: 'Good environment with Wi-Fi, mess, and all essential amenities.',
    warden: 'Mr. Dinesh Mehta', wardenPhone: '+919998887766', caretaker: 'Mr. Rajat Singh', caretakerPhone: '+919800987654' },
];

const emergency = [
  { title: 'Director', name: 'Dr. Rajeev Malhotra', phone: '+911100112233' },
  { title: 'Dean of Student Welfare', name: 'Prof. Neha Bansal', phone: '+911100445566' },
  { title: 'Medical Emergency', name: 'Campus Clinic', phone: '+911145678900' },
  { title: 'Security Helpdesk', name: 'Main Gate Security', phone: '+911123456789' },
  { title: 'Fire Emergency', name: 'Fire Station (Local)', phone: '101' },
];

const Home = () => (
  <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
    <style>{`
      .h-hero { position:relative; width:100%; height:520px; overflow:hidden; }
      .h-hero img { width:100%; height:100%; object-fit:cover; filter:brightness(35%) saturate(0.7); }
      .h-hero-overlay { position:absolute; inset:0; display:flex; flex-direction:column;
        justify-content:center; align-items:center; text-align:center; padding:20px; }
      .h-hero-tag { font-size:12px; letter-spacing:0.15em; text-transform:uppercase;
        color:var(--gold); font-weight:600; margin-bottom:16px; }
      .h-hero h1 { font-family:var(--font-display); font-size:3rem; font-weight:700;
        color:#fff; margin-bottom:14px; line-height:1.15; }
      .h-hero p { color:rgba(255,255,255,0.65); font-size:1rem; max-width:480px; }
      .h-section { max-width:1200px; margin:0 auto; padding:64px 32px 0; }
      .h-sec-title { font-family:var(--font-display); font-size:1.8rem; color:var(--text-primary);
        margin-bottom:6px; }
      .h-sec-sub { color:var(--text-secondary); font-size:14px; margin-bottom:36px; }
      .h-divider { width:48px; height:3px; background:var(--gold); margin-bottom:12px; border-radius:2px; }
      .h-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(320px,1fr)); gap:20px; }
      .h-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius);
        padding:24px; transition:all 0.25s; cursor:default; animation:fadeUp 0.5s ease both; }
      .h-card:hover { border-color:var(--border-accent); transform:translateY(-4px);
        box-shadow:0 12px 32px rgba(0,0,0,0.3), var(--shadow-glow); }
      .h-card-badge { display:inline-block; font-size:10px; letter-spacing:0.1em;
        text-transform:uppercase; padding:3px 10px; border-radius:99px; font-weight:700;
        margin-bottom:12px; }
      .badge-boys { background:rgba(59,130,246,0.15); color:#93c5fd; border:1px solid rgba(59,130,246,0.3); }
      .badge-girls { background:rgba(244,114,182,0.15); color:#f9a8d4; border:1px solid rgba(244,114,182,0.3); }
      .h-card h3 { font-family:var(--font-display); font-size:1.2rem; color:var(--text-primary); margin-bottom:8px; }
      .h-card p { color:var(--text-secondary); font-size:13.5px; line-height:1.6; margin-bottom:16px; }
      .h-contact-row { display:flex; align-items:center; gap:8px; font-size:13px; margin-bottom:8px; }
      .h-contact-row span { color:var(--text-muted); font-size:11px; text-transform:uppercase;
        letter-spacing:0.05em; min-width:68px; }
      .h-contact-row a { color:var(--gold); transition:color 0.2s; }
      .h-contact-row a:hover { color:var(--gold-light); }
      .h-emg-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius);
        padding:22px; display:flex; flex-direction:column; gap:6px; transition:all 0.25s;
        animation:fadeUp 0.5s ease both; }
      .h-emg-card:hover { border-color:rgba(239,68,68,0.4); transform:translateY(-3px); }
      .h-emg-card h4 { color:var(--text-primary); font-size:14px; font-weight:600; }
      .h-emg-card p { color:var(--text-secondary); font-size:13px; }
      .h-emg-card a { color:#f87171; font-weight:600; font-size:14px; margin-top:4px; }
      @media(max-width:600px) { .h-hero h1 { font-size:2rem; } .h-section { padding:40px 16px 0; } }
    `}</style>

    {/* Hero */}
    <div className="h-hero">
      <img src="/college.jpg" alt="RKGIT Campus" />
      <div className="h-hero-overlay">
        <div className="h-hero-tag">RKGIT Hostel Portal</div>
        <h1>Raj Kumar Goel Institute<br />of Technology</h1>
        <p>Ghaziabad, Uttar Pradesh — Your home away from home</p>
      </div>
    </div>

    {/* Hostels */}
    <div className="h-section">
      <div className="h-divider" />
      <h2 className="h-sec-title">Our Hostels</h2>
      <p className="h-sec-sub">Comfortable living with modern amenities</p>
      <div className="h-grid">
        {hostels.map((h, i) => (
          <div key={i} className="h-card" style={{ animationDelay: `${i * 0.08}s` }}>
            <span className={`h-card-badge ${h.type === 'GIRLS' ? 'badge-girls' : 'badge-boys'}`}>{h.type}</span>
            <h3>{h.name}</h3>
            <p>{h.description}</p>
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '14px' }}>
              <div className="h-contact-row">
                <User size={13} color="var(--text-muted)" />
                <span>Warden</span>
                <span style={{ color: 'var(--text-primary)', fontSize: '13px' }}>{h.warden}</span>
                <span style={{ color: 'var(--text-muted)' }}>·</span>
                <a href={`tel:${h.wardenPhone}`}>{h.wardenPhone}</a>
              </div>
              <div className="h-contact-row">
                <Shield size={13} color="var(--text-muted)" />
                <span>Caretaker</span>
                <span style={{ color: 'var(--text-primary)', fontSize: '13px' }}>{h.caretaker}</span>
                <span style={{ color: 'var(--text-muted)' }}>·</span>
                <a href={`tel:${h.caretakerPhone}`}>{h.caretakerPhone}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Emergency */}
    <div className="h-section" style={{ paddingBottom: '0' }}>
      <div className="h-divider" style={{ background: '#ef4444' }} />
      <h2 className="h-sec-title">Emergency Contacts</h2>
      <p className="h-sec-sub">Reach out immediately when needed</p>
      <div className="h-grid">
        {emergency.map((e, i) => (
          <div key={i} className="h-emg-card" style={{ animationDelay: `${i * 0.08}s` }}>
            <h4>{e.title}</h4>
            <p>{e.name}</p>
            <a href={`tel:${e.phone}`}><Phone size={13} style={{ marginRight: '6px' }} />{e.phone}</a>
          </div>
        ))}
      </div>
    </div>

    <Footer />
  </div>
);

export default Home;
