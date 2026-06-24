import React, { useEffect, useState } from 'react';
import { societiesAPI } from '../../api';
import { Users, Plus, Pencil, Trash2, Save, X, UserCircle, Phone } from 'lucide-react';

const AdminSocietiesPage = () => {
  const [societies, setSocieties] = useState([]);
  const [form,      setForm]      = useState({ name: '', head: '', contact: '', logoUrl: '' });
  const [editId,    setEditId]    = useState(null);
  const [error,     setError]     = useState('');

  useEffect(() => { load(); }, []);
  const load = () => societiesAPI.getAll().then(setSocieties).catch(console.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (editId) { await societiesAPI.update(editId, form); setEditId(null); }
      else { await societiesAPI.create(form); }
      setForm({ name: '', head: '', contact: '', logoUrl: '' });
      load();
    } catch (err) { setError(err.message); }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this society?')) return;
    try { await societiesAPI.delete(id); setSocieties(prev => prev.filter(s => s._id !== id)); }
    catch (err) { alert(err.message); }
  };

  const handleEdit = (s) => {
    setForm({ name: s.name, head: s.head, contact: s.contact || '', logoUrl: s.logoUrl || '' });
    setEditId(s._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', padding: '52px 32px' }}>
      <style>{`
        .as-wrap { max-width:1100px; margin:0 auto; }
        .as-form { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius);
          padding:32px; margin-bottom:40px; border-left:3px solid var(--gold); }
        .as-grid2 { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        .as-label { display:block; font-size:12px; font-weight:600; color:var(--text-muted);
          margin-bottom:7px; text-transform:uppercase; letter-spacing:0.05em; }
        .as-input { width:100%; padding:12px 14px; background:var(--bg-secondary); border:1px solid var(--border);
          border-radius:var(--radius-sm); color:var(--text-primary); font-size:14px; outline:none;
          transition:border-color 0.2s; font-family:var(--font-body); box-sizing:border-box; }
        .as-input:focus { border-color:var(--gold); }
        .as-btns { display:flex; gap:10px; margin-top:20px; }
        .as-save { display:flex; align-items:center; gap:7px; padding:11px 22px;
          background:linear-gradient(135deg, var(--gold), #b8962e); color:#0a0e1a;
          font-weight:700; font-size:14px; border:none; border-radius:var(--radius-sm); cursor:pointer; }
        .as-cancel { display:flex; align-items:center; gap:7px; padding:11px 18px;
          background:rgba(255,255,255,0.05); border:1px solid var(--border); color:var(--text-secondary);
          font-size:14px; border-radius:var(--radius-sm); cursor:pointer; }
        .as-err { padding:10px 14px; background:rgba(239,68,68,0.1); border:1px solid rgba(239,68,68,0.3);
          border-radius:var(--radius-sm); color:#fca5a5; font-size:13px; margin-top:10px; }
        .as-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); gap:18px; }
        .as-card { background:var(--bg-card); border:1px solid var(--border); border-radius:var(--radius);
          padding:24px; text-align:center; animation:fadeUp 0.4s ease both; transition:all 0.2s; }
        .as-card:hover { border-color:var(--border-accent); }
        .as-logo { width:68px; height:68px; border-radius:50%; object-fit:cover; border:2px solid var(--border-accent); margin:0 auto 14px; display:block; }
        .as-avatar { width:68px; height:68px; border-radius:50%; background:var(--gold-dim); border:2px solid var(--border-accent);
          margin:0 auto 14px; display:flex; align-items:center; justify-content:center; }
        .as-name { font-family:var(--font-display); font-size:1rem; font-weight:600; color:var(--text-primary); margin-bottom:8px; }
        .as-row { display:flex; align-items:center; justify-content:center; gap:6px; font-size:12.5px; color:var(--text-secondary); margin-bottom:6px; }
        .as-actions { display:flex; justify-content:center; gap:8px; margin-top:14px; padding-top:14px; border-top:1px solid var(--border); }
        .as-edit { display:flex; align-items:center; gap:5px; padding:7px 14px; background:rgba(212,175,55,0.1);
          border:1px solid rgba(212,175,55,0.25); color:var(--gold); border-radius:var(--radius-sm);
          cursor:pointer; font-size:13px; font-weight:500; }
        .as-del { display:flex; align-items:center; gap:5px; padding:7px 14px; background:rgba(239,68,68,0.1);
          border:1px solid rgba(239,68,68,0.25); color:#f87171; border-radius:var(--radius-sm);
          cursor:pointer; font-size:13px; font-weight:500; }
        @media(max-width:600px) { .as-grid2 { grid-template-columns:1fr; } }
      `}</style>
      <div className="as-wrap">
        <div style={{ marginBottom: '32px' }}>
          <div style={{ width: '40px', height: '3px', background: 'var(--gold)', borderRadius: '2px', marginBottom: '12px' }} />
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', marginBottom: '6px' }}>
            {editId ? 'Edit Society' : 'Manage Societies'}
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>Add, edit or remove college societies</p>
        </div>

        <div className="as-form">
          <p style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase',
            letterSpacing: '0.07em', marginBottom: '18px' }}>
            {editId ? 'Edit Society Details' : 'Add New Society'}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="as-grid2">
              {[['Society Name', 'name', 'e.g., Robotics Club', true],
                ['Head Name', 'head', 'Full name of head', true],
                ['Contact Number', 'contact', '+91 XXXXXXXXXX', false],
                ['Logo URL', 'logoUrl', 'https://...', false]
              ].map(([label, key, ph, req]) => (
                <div key={key}>
                  <label className="as-label">{label}</label>
                  <input className="as-input" type="text" placeholder={ph} value={form[key]} required={req}
                    onChange={e => setForm({ ...form, [key]: e.target.value })} />
                </div>
              ))}
            </div>
            <div className="as-btns">
              <button type="submit" className="as-save">
                {editId ? <><Save size={15} /> Update</> : <><Plus size={15} /> Add Society</>}
              </button>
              {editId && (
                <button type="button" className="as-cancel"
                  onClick={() => { setEditId(null); setForm({ name: '', head: '', contact: '', logoUrl: '' }); }}>
                  <X size={15} /> Cancel
                </button>
              )}
            </div>
            {error && <div className="as-err">{error}</div>}
          </form>
        </div>

        {societies.length > 0 && (
          <>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', marginBottom: '20px', color: 'var(--text-secondary)' }}>
              All Societies ({societies.length})
            </h3>
            <div className="as-grid">
              {societies.map((s, i) => (
                <div key={s._id} className="as-card" style={{ animationDelay: `${i * 0.07}s` }}>
                  {s.logoUrl
                    ? <img src={s.logoUrl} alt={s.name} className="as-logo" />
                    : <div className="as-avatar"><Users size={26} color="var(--gold)" /></div>}
                  <div className="as-name">{s.name}</div>
                  <div className="as-row"><UserCircle size={13} />{s.head}</div>
                  {s.contact && <div className="as-row"><Phone size={13} />{s.contact}</div>}
                  <div className="as-actions">
                    <button className="as-edit" onClick={() => handleEdit(s)}><Pencil size={13} /> Edit</button>
                    <button className="as-del"  onClick={() => handleDelete(s._id)}><Trash2 size={13} /> Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminSocietiesPage;
