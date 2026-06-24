import React, { useEffect, useState } from 'react';
import { societiesAPI } from '../../api';
import { Users, Phone, UserCircle } from 'lucide-react';

const UserSocietiesPage = () => {
  const [societies, setSocieties] = useState([]);

  useEffect(() => {
    societiesAPI.getAll().then(setSocieties).catch(console.error);
  }, []);

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', padding: '110px 52px 32px' }}>
      <style>{`
        .sc-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:20px; max-width:1100px; }
        .sc-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius);
          padding:28px; text-align:center; transition:all 0.25s; animation:fadeUp 0.5s ease both; }
        .sc-card:hover { border-color:var(--border-accent); transform:translateY(-4px); box-shadow:0 12px 32px rgba(0,0,0,0.3); }
        .sc-logo { width:72px; height:72px; border-radius:50%; object-fit:cover; border:2px solid var(--border-accent); margin:0 auto 16px; display:block; }
        .sc-avatar { width:72px; height:72px; border-radius:50%; background:var(--gold-dim); border:2px solid var(--border-accent);
          margin:0 auto 16px; display:flex; align-items:center; justify-content:center; }
        .sc-name { font-family:var(--font-display); font-size:1.1rem; font-weight:600; color:var(--text-primary); margin-bottom:10px; }
        .sc-row { display:flex; align-items:center; justify-content:center; gap:6px; font-size:13px; color:var(--text-secondary); margin-bottom:6px; }
      `}</style>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '36px' }}>
          <div style={{ width: '40px', height: '3px', background: 'var(--gold)', borderRadius: '2px', marginBottom: '12px' }} />
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', marginBottom: '6px' }}>College Societies</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Explore clubs and student organizations</p>
        </div>
        {societies.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
            <Users size={40} style={{ margin: '0 auto 16px', display: 'block', opacity: 0.3 }} />
            <p>No societies added yet.</p>
          </div>
        ) : (
          <div className="sc-grid">
            {societies.map((s, i) => (
              <div key={s._id} className="sc-card" style={{ animationDelay: `${i * 0.07}s` }}>
                {s.logoUrl
                  ? <img src={s.logoUrl} alt={s.name} className="sc-logo" />
                  : <div className="sc-avatar"><Users size={28} color="var(--gold)" /></div>}
                <div className="sc-name">{s.name}</div>
                <div className="sc-row"><UserCircle size={14} />{s.head}</div>
                {s.contact && <div className="sc-row"><Phone size={13} />{s.contact}</div>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserSocietiesPage;
