import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { clearAuth } from '../../api';
import { LayoutDashboard, MessageSquare, AlertTriangle, Bell, Users, LogOut, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Dashboard',  path: '/admin/dashboard',  icon: LayoutDashboard },
  { name: 'Feedback',   path: '/admin/feedback',   icon: MessageSquare },
  { name: 'Complaints', path: '/admin/complaints', icon: AlertTriangle },
  { name: 'Notices',    path: '/admin/notice',     icon: Bell },
  { name: 'Societies',  path: '/admin/societies',  icon: Users },
];

const AdminLayout = () => {
  const location   = useLocation();
  const navigate   = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => { clearAuth(); navigate('/login'); };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        .al-nav { display:flex; justify-content:space-between; align-items:center;
          padding:0 32px; height:64px; background:rgba(8,14,26,0.95);
          backdrop-filter:blur(16px); border-bottom:1px solid var(--border);
          position:sticky; top:0; z-index:1000; }
        .al-logo { display:flex; align-items:center; gap:10px; }
        .al-logo-icon { font-size:22px; color:var(--gold); }
        .al-logo-text { font-family:var(--font-display); font-size:19px; font-weight:700; color:var(--gold); }
        .al-badge { font-size:11px; padding:2px 8px; background:var(--gold-dim);
          border:1px solid var(--border-accent); color:var(--gold); border-radius:99px;
          font-weight:600; letter-spacing:0.06em; margin-left:4px; }
        .al-links { display:flex; align-items:center; gap:4px; }
        .al-link { display:flex; align-items:center; gap:7px; padding:8px 14px;
          border-radius:8px; font-size:14px; font-weight:500; color:var(--text-secondary);
          transition:all 0.2s; cursor:pointer; }
        .al-link:hover  { background:var(--gold-dim); color:var(--text-primary); }
        .al-link.active { background:var(--gold-dim); color:var(--gold); border:1px solid var(--border-accent); }
        .al-link svg { width:15px; height:15px; }
        .al-logout { display:flex; align-items:center; gap:7px; padding:8px 16px;
          background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.25);
          color:#f87171; border-radius:8px; font-size:14px; font-weight:500;
          cursor:pointer; transition:all 0.2s; margin-left:8px; }
        .al-logout:hover { background:rgba(239,68,68,0.2); }
        .al-hamburger { display:none; cursor:pointer; color:var(--gold); }
        .al-mobile { display:none; flex-direction:column; padding:12px 24px 20px;
          background:var(--bg-secondary); border-bottom:1px solid var(--border); gap:4px; }
        .al-mobile.open { display:flex; }
        @media(max-width:900px) { .al-links{display:none;} .al-hamburger{display:block;} }
      `}</style>
      <nav className="al-nav">
        <div className="al-logo">
          <span className="al-logo-icon">⬡</span>
          <span className="al-logo-text">HostelMate</span>
          <span className="al-badge">ADMIN</span>
        </div>
        <div className="al-links">
          {navItems.map(({ name, path, icon: Icon }) => (
            <Link key={path} to={path}
              className={`al-link${location.pathname === path ? ' active' : ''}`}>
              <Icon /> {name}
            </Link>
          ))}
          <button className="al-logout" onClick={handleLogout}><LogOut size={14} /> Logout</button>
        </div>
        <div className="al-hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </nav>
      <div className={`al-mobile${mobileOpen ? ' open' : ''}`}>
        {navItems.map(({ name, path, icon: Icon }) => (
          <Link key={path} to={path}
            className={`al-link${location.pathname === path ? ' active' : ''}`}
            onClick={() => setMobileOpen(false)}>
            <Icon /> {name}
          </Link>
        ))}
        <button className="al-logout" style={{ marginLeft: 0, marginTop: '8px' }}
          onClick={() => { handleLogout(); setMobileOpen(false); }}>
          <LogOut size={14} /> Logout
        </button>
      </div>
      <main style={{ flex: 1 }}><Outlet /></main>
    </div>
  );
};

export default AdminLayout;
