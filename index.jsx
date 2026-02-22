import { useState } from "react";
import { ArrowRight, Menu, X, Search, Database, Filter, Globe, Send, Inbox, Sparkles, MessageSquare, UserCheck, Rocket, ChevronRight } from "lucide-react";

// ── Google Font loader ──
const fontLink = "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Instrument+Serif:ital@0;1&display=swap";

const css = `
@import url('${fontLink}');
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{font-family:'DM Sans',system-ui,sans-serif;-webkit-font-smoothing:antialiased}
input::placeholder{color:#94a3b8;font-family:'DM Sans',system-ui,sans-serif}
button{font-family:'DM Sans',system-ui,sans-serif}
a{text-decoration:none;color:inherit}
@keyframes float1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(40px,-30px) scale(1.05)}}
@keyframes float2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-30px,40px) scale(1.08)}}
@keyframes float3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(20px,30px) scale(0.95)}}
@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
.fade-up{animation:fadeUp 0.7s ease-out both}
.fade-up-d1{animation:fadeUp 0.7s ease-out 0.1s both}
.fade-up-d2{animation:fadeUp 0.7s ease-out 0.2s both}
.fade-up-d3{animation:fadeUp 0.7s ease-out 0.3s both}
@media(max-width:768px){.hide-mobile{display:none!important}}
@media(min-width:769px){.hide-desktop{display:none!important}}
`;

// ── Color tokens ──
const c = {
  violet: "#7c3aed", violetDark: "#6d28d9", violetDeep: "#5b21b6", violetLight: "#a78bfa", violetPale: "#ddd6fe",
  indigo: "#6366f1", slate900: "#0f172a", slate800: "#1e293b", slate700: "#334155", slate600: "#475569",
  slate500: "#64748b", slate400: "#94a3b8", slate300: "#cbd5e1", slate200: "#e2e8f0", slate100: "#f1f5f9", slate50: "#f8fafc",
};

const serif = "'Instrument Serif', Georgia, serif";
const sans = "'DM Sans', system-ui, -apple-system, sans-serif";

// ══════════════════════════════════════
// HEADER
// ══════════════════════════════════════
function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position:"sticky",top:0,zIndex:50,background:"rgba(255,255,255,0.92)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",borderBottom:`1px solid rgba(0,0,0,0.04)` }}>
      <div style={{ maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:72,padding:"0 32px" }}>
        <a href="#" style={{ display:"flex",alignItems:"center",gap:10 }}>
          <div style={{ width:34,height:34,borderRadius:10,background:`linear-gradient(135deg, ${c.violet}, ${c.indigo})`,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 2px 8px rgba(124,58,237,0.3)` }}>
            <span style={{ color:"#fff",fontWeight:700,fontSize:15,fontFamily:sans }}>M</span>
          </div>
          <span style={{ fontSize:19,fontWeight:600,color:c.slate900,letterSpacing:"-0.02em",fontFamily:sans }}>Monara</span>
        </a>
        <nav className="hide-mobile" style={{ display:"flex",alignItems:"center",gap:36 }}>
          {["The Architects","Pricing","Login"].map(t=>(
            <a key={t} href={`#${t.toLowerCase().replace(/ /g,"-")}`} style={{ fontSize:14.5,fontWeight:500,color:c.slate600,transition:"color 0.2s" }}>{t}</a>
          ))}
          <a href="#trial" style={{ height:40,padding:"0 22px",borderRadius:9999,background:`linear-gradient(135deg, ${c.violet}, ${c.violetDark})`,color:"#fff",fontSize:14,fontWeight:600,display:"inline-flex",alignItems:"center",boxShadow:`0 4px 16px rgba(124,58,237,0.35)`,transition:"all 0.2s" }}>
            Start Free Trial
          </a>
        </nav>
        <button className="hide-desktop" onClick={()=>setOpen(!open)} style={{ width:40,height:40,borderRadius:10,border:"none",background:open?"#f1f5f9":"transparent",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center" }}>
          {open?<X size={20} color={c.slate600}/>:<Menu size={20} color={c.slate600}/>}
        </button>
      </div>
      {open&&(
        <div className="hide-desktop" style={{ padding:"12px 32px 24px",borderTop:`1px solid ${c.slate100}`,display:"flex",flexDirection:"column",gap:16,background:"#fff" }}>
          {["The Architects","Pricing","Login"].map(t=>(
            <a key={t} href="#" style={{ fontSize:15,fontWeight:500,color:c.slate700 }}>{t}</a>
          ))}
          <a href="#" style={{ marginTop:4,height:44,borderRadius:9999,background:c.violet,color:"#fff",fontSize:14,fontWeight:600,display:"flex",alignItems:"center",justifyContent:"center" }}>Start Free Trial</a>
        </div>
      )}
    </header>
  );
}

// ══════════════════════════════════════
// HERO
// ══════════════════════════════════════
const pills = [
  "Find 200 SaaS founders in Austin and build a sequence to book demos.",
  "Scrape LinkedIn for marketing managers and pitch my $49/mo free trial.",
  "Target e-commerce brands that just raised funding and handle replies.",
  "Find local real estate agents in Florida and invite them to my waitlist.",
];

function Hero() {
  return (
    <section style={{ position:"relative",overflow:"hidden",paddingTop:80,paddingBottom:100 }}>
      {/* ── Gradient background wash ── */}
      <div style={{ position:"absolute",inset:0,zIndex:0,pointerEvents:"none",overflow:"hidden" }}>
        {/* Main top gradient wash - like Artisan */}
        <div style={{ position:"absolute",top:"-20%",left:"-10%",width:"120%",height:"70%",background:"linear-gradient(160deg, rgba(237,233,254,0.7) 0%, rgba(224,231,255,0.5) 30%, rgba(245,243,255,0.3) 60%, transparent 100%)",filter:"blur(0px)" }}/>
        {/* Floating orbs */}
        <div style={{ position:"absolute",top:-80,left:"10%",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)",animation:"float1 12s ease-in-out infinite" }}/>
        <div style={{ position:"absolute",top:100,right:"5%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle, rgba(129,140,248,0.2) 0%, transparent 70%)",animation:"float2 15s ease-in-out infinite" }}/>
        <div style={{ position:"absolute",bottom:-100,left:"30%",width:600,height:400,borderRadius:"50%",background:"radial-gradient(circle, rgba(196,181,253,0.2) 0%, transparent 70%)",animation:"float3 18s ease-in-out infinite" }}/>
      </div>

      <div style={{ position:"relative",zIndex:1,maxWidth:1200,margin:"0 auto",padding:"0 32px" }}>
        <div style={{ maxWidth:800,margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center" }}>
          {/* Headline */}
          <h1 className="fade-up" style={{ fontFamily:sans,fontSize:"clamp(42px, 7vw, 76px)",fontWeight:700,letterSpacing:"-0.035em",lineHeight:1.05,color:c.slate900 }}>
            Automate Your Growth{" "}
            <span style={{ fontFamily:serif,fontStyle:"italic",fontWeight:400,background:`linear-gradient(135deg, ${c.violet} 0%, ${c.indigo} 40%, ${c.violetLight} 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
              With AI Employees
            </span>
          </h1>

          {/* Subheadline */}
          <p className="fade-up-d1" style={{ marginTop:28,maxWidth:620,fontSize:16.5,lineHeight:1.75,color:c.slate500,fontWeight:400 }}>
            Meet Monara, the AI co-founder built to drive consistent revenue growth on autopilot. From finding verified leads to booking sales calls or flooding your dashboard with direct sign-ups—Monara handles the entire outbound funnel 24/7 so you can focus on building a world-class product.
          </p>

          {/* Command Prompt */}
          <div className="fade-up-d2" style={{ marginTop:48,width:"100%",maxWidth:620 }}>
            <div style={{ display:"flex",alignItems:"center",borderRadius:9999,background:"#fff",padding:"6px 6px 6px 24px",boxShadow:"0 8px 40px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)" }}>
              <input type="text" placeholder="Ask Monara to build your next campaign..." readOnly style={{ flex:1,border:"none",outline:"none",background:"transparent",fontSize:15,color:c.slate700,fontFamily:sans }} />
              <button style={{ width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg, ${c.violet}, ${c.violetDark})`,border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:`0 4px 16px rgba(124,58,237,0.4)`,flexShrink:0,transition:"transform 0.2s" }}>
                <ArrowRight size={18} color="#fff" strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Prompt Pills */}
          <div className="fade-up-d3" style={{ marginTop:28,width:"100%",maxWidth:660 }}>
            <p style={{ marginBottom:14,fontSize:13,fontWeight:500,color:c.slate400,letterSpacing:"0.01em" }}>Not sure how to start? Try one:</p>
            <div style={{ display:"flex",flexWrap:"wrap",justifyContent:"center",gap:10 }}>
              {pills.map((p,i)=>(
                <button key={i} style={{ borderRadius:9999,border:`1.5px solid ${c.violetPale}`,background:"rgba(255,255,255,0.85)",backdropFilter:"blur(4px)",padding:"10px 18px",fontSize:13,lineHeight:1.45,color:c.slate600,cursor:"pointer",textAlign:"left",transition:"all 0.2s",fontFamily:sans,maxWidth:360 }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor=c.violetLight;e.currentTarget.style.background="#faf5ff"}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=c.violetPale;e.currentTarget.style.background="rgba(255,255,255,0.85)"}}
                >{p}</button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="fade-up-d3" style={{ marginTop:36,display:"flex",gap:14,flexWrap:"wrap",justifyContent:"center" }}>
            <a href="#trial" style={{ height:48,padding:"0 32px",borderRadius:9999,background:`linear-gradient(135deg, ${c.violet}, ${c.violetDark})`,color:"#fff",fontSize:15,fontWeight:600,display:"inline-flex",alignItems:"center",boxShadow:`0 6px 24px rgba(124,58,237,0.35)`,transition:"all 0.2s",fontFamily:sans }}>
              Start 14-Day Trial
            </a>
            <a href="#demo" style={{ height:48,padding:"0 32px",borderRadius:9999,background:"#fff",color:c.slate700,fontSize:15,fontWeight:600,display:"inline-flex",alignItems:"center",border:`1.5px solid ${c.slate200}`,transition:"all 0.2s",fontFamily:sans }}>
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// ARCHITECTS (Dark Section)
// ══════════════════════════════════════
const agents = [
  { name:"Chase", role:"Prospecting Agent", icon:Search, d:"Scours a 700M+ B2B database to find hyper-targeted, verified leads that match your exact ideal customer profile." },
  { name:"Atlas", role:"Enrichment Agent", icon:Database, d:"Maps out the data landscape, pulling firmographics, recent funding, and tech stack data so no lead is left cold." },
  { name:"Quinn", role:"Qualifying Agent", icon:Filter, d:"Scores and filters leads based on strict criteria, protecting your domain reputation and ensuring you only pitch the perfect fit." },
  { name:"Sage", role:"Researching Agent", icon:Globe, d:"Scrapes websites, LinkedIn profiles, and recent news to gather deep, intelligent insights for true 1-to-1 personalization." },
  { name:"Nova", role:"Outbound Agent", icon:Send, d:"Crafts highly tailored, multi-channel sequences and launches them at the exact right time for maximum open rates." },
  { name:"Piper", role:"Inbound Agent", icon:Inbox, d:"Monitors your unified inbox, categorizes replies, handles objections, and drops meeting links directly into warm conversations." },
];

function AgentCard({ agent }) {
  const I = agent.icon;
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{
        borderRadius:20, padding:"28px 28px", transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",
        background: hov ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.04)",
        border: hov ? `1px solid rgba(124,58,237,0.35)` : "1px solid rgba(255,255,255,0.08)",
        boxShadow: hov ? "0 0 40px rgba(124,58,237,0.08), 0 8px 32px rgba(0,0,0,0.12)" : "0 2px 8px rgba(0,0,0,0.08)",
        backdropFilter:"blur(12px)", cursor:"default"
      }}
    >
      <div style={{ width:44,height:44,borderRadius:14,background:"rgba(124,58,237,0.12)",border:"1px solid rgba(124,58,237,0.2)",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:20 }}>
        <I size={22} color={c.violetLight} strokeWidth={1.8} />
      </div>
      <h4 style={{ fontSize:16,fontWeight:600,color:"#fff",fontFamily:sans,marginBottom:4 }}>
        {agent.name} <span style={{ fontWeight:400,color:c.slate400 }}>({agent.role})</span>
      </h4>
      <p style={{ fontSize:14,lineHeight:1.7,color:"#94a3b8",fontFamily:sans }}>{agent.d}</p>
    </div>
  );
}

function Architects() {
  return (
    <section id="the-architects" style={{ position:"relative",background:`linear-gradient(180deg, ${c.slate900} 0%, #0c1222 100%)`,padding:"100px 0 108px",overflow:"hidden" }}>
      {/* Top glow */}
      <div style={{ position:"absolute",left:"50%",top:-200,width:800,height:600,transform:"translateX(-50%)",borderRadius:"50%",background:"radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)",pointerEvents:"none" }}/>

      <div style={{ position:"relative",zIndex:1,maxWidth:1200,margin:"0 auto",padding:"0 32px" }}>
        <div style={{ maxWidth:700,margin:"0 auto",textAlign:"center" }}>
          <h2 style={{ fontFamily:sans,fontSize:"clamp(32px,5vw,52px)",fontWeight:700,letterSpacing:"-0.03em",color:"#fff",lineHeight:1.12 }}>
            Meet Your Future Outbound Team:{" "}
            <span style={{ fontFamily:serif,fontStyle:"italic",fontWeight:400,background:`linear-gradient(135deg, ${c.violetLight} 0%, ${c.indigo} 50%, #c4b5fd 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
              The Architects.
            </span>
          </h2>
          <p style={{ marginTop:20,fontSize:17,color:c.slate400,lineHeight:1.6,fontFamily:sans }}>
            You don't just get software; you get a fully autonomous revenue team.
          </p>
        </div>

        {/* Monara Spotlight */}
        <div style={{ maxWidth:760,margin:"56px auto 0" }}>
          <div style={{
            borderRadius:24,padding:"36px 40px",
            background:"rgba(255,255,255,0.05)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
            border:"1px solid rgba(124,58,237,0.25)",
            boxShadow:"0 0 80px rgba(124,58,237,0.06), inset 0 1px 0 rgba(255,255,255,0.05)"
          }}>
            <div style={{ display:"flex",gap:20,alignItems:"flex-start",flexWrap:"wrap" }}>
              <div style={{ width:52,height:52,borderRadius:16,background:`linear-gradient(135deg, rgba(124,58,237,0.25), rgba(99,102,241,0.2))`,border:"1px solid rgba(124,58,237,0.35)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0 }}>
                <span style={{ fontSize:20,fontWeight:700,color:c.violetLight,fontFamily:sans }}>M</span>
              </div>
              <div style={{ flex:1,minWidth:260 }}>
                <h3 style={{ fontSize:22,fontWeight:700,color:"#fff",fontFamily:sans }}>
                  Monara <span style={{ fontWeight:400,color:c.slate400,fontSize:20 }}>(The Co-Founder)</span>
                </h3>
                <p style={{ marginTop:12,fontSize:15.5,lineHeight:1.75,color:c.slate300,fontFamily:sans }}>
                  The brain of the operation. Simply tell Monara your revenue goals in plain English, and she orchestrates her team of specialized Architects to execute the entire campaign from scratch.
                </p>
                <a href="#" style={{ marginTop:20,display:"inline-flex",alignItems:"center",gap:6,fontSize:14.5,fontWeight:600,color:c.violetLight,transition:"color 0.2s",fontFamily:sans }}>
                  Learn more about Monara <ArrowRight size={15} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Grid - 2 cols like Artisan */}
        <div style={{ marginTop:28,display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(340px, 1fr))",gap:16,maxWidth:760,marginLeft:"auto",marginRight:"auto" }}>
          {agents.map(a=><AgentCard key={a.name} agent={a} />)}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// INTERACTIVE DEMO
// ══════════════════════════════════════
function InteractiveDemo() {
  return (
    <section style={{ padding:"100px 0",background:"#fff" }}>
      <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 32px" }}>
        <div style={{ maxWidth:700,margin:"0 auto",textAlign:"center" }}>
          <h2 style={{ fontFamily:sans,fontSize:"clamp(30px,4.5vw,44px)",fontWeight:700,letterSpacing:"-0.03em",color:c.slate900 }}>
            See Monara's Team{" "}
            <span style={{ fontFamily:serif,fontStyle:"italic",fontWeight:400,background:`linear-gradient(135deg, ${c.violet}, ${c.indigo}, ${c.violetLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>in Action.</span>
          </h2>
        </div>
        <div style={{ maxWidth:880,margin:"52px auto 0" }}>
          <div style={{ borderRadius:28,overflow:"hidden",background:"#fff",boxShadow:"0 20px 60px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)" }}>
            {/* Browser Chrome */}
            <div style={{ display:"flex",alignItems:"center",gap:8,padding:"14px 20px",background:c.slate50,borderBottom:`1px solid ${c.slate100}` }}>
              <div style={{ display:"flex",gap:7 }}>
                {[0,1,2].map(n=><div key={n} style={{ width:13,height:13,borderRadius:"50%",background:c.slate200 }}/>)}
              </div>
              <div style={{ flex:1,marginLeft:20 }}>
                <div style={{ maxWidth:300,margin:"0 auto",height:28,borderRadius:10,background:c.slate100,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12.5,color:c.slate400,fontFamily:sans }}>app.monara.ai/campaign</div>
              </div>
              <div style={{ width:52 }}/>
            </div>
            {/* Content */}
            <div style={{ padding:"64px 56px" }}>
              <div style={{ maxWidth:500,margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",gap:20 }}>
                <div style={{ width:56,height:56,borderRadius:16,background:`linear-gradient(135deg, #f5f3ff, #ede9fe)`,display:"flex",alignItems:"center",justifyContent:"center" }}>
                  <Sparkles size={28} color={c.violet} strokeWidth={1.8} />
                </div>
                <p style={{ textAlign:"center",fontSize:15,color:c.slate500,lineHeight:1.65,fontFamily:sans }}>
                  Enter your website URL and let Monara analyze your business to generate a tailored outbound campaign.
                </p>
                <div style={{ display:"flex",gap:12,width:"100%",flexWrap:"wrap" }}>
                  <input type="url" placeholder="Enter your website URL" style={{ flex:"1 1 240px",borderRadius:14,border:`1.5px solid ${c.slate200}`,background:c.slate50,padding:"14px 18px",fontSize:15,outline:"none",fontFamily:sans,transition:"border-color 0.2s" }}
                    onFocus={e=>e.target.style.borderColor=c.violetLight}
                    onBlur={e=>e.target.style.borderColor=c.slate200}
                  />
                  <button style={{ height:50,padding:"0 28px",borderRadius:14,background:`linear-gradient(135deg, ${c.violet}, ${c.violetDark})`,color:"#fff",fontSize:15,fontWeight:600,border:"none",cursor:"pointer",boxShadow:`0 4px 16px rgba(124,58,237,0.3)`,whiteSpace:"nowrap",fontFamily:sans }}>Generate Campaign</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// WORKFLOW
// ══════════════════════════════════════
const wSteps = [
  { n:"01", icon:MessageSquare, t:"Command Monara", d:"You set the goal. Monara builds the strategy." },
  { n:"02", icon:Database, t:"Sourcing & Enrichment", d:"Chase and Atlas pull and verify data from our 700M+ database." },
  { n:"03", icon:UserCheck, t:"Hyper-Personalization", d:"Sage and Quinn research the leads to ensure fit and craft the message." },
  { n:"04", icon:Rocket, t:"Omnichannel Execution", d:"Nova launches the sequences, and Piper catches the replies to book the meeting." },
];

function Workflow() {
  return (
    <section style={{ background:c.slate50,padding:"100px 0" }}>
      <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 32px" }}>
        <div style={{ maxWidth:700,margin:"0 auto",textAlign:"center" }}>
          <h2 style={{ fontFamily:sans,fontSize:"clamp(30px,4.5vw,44px)",fontWeight:700,letterSpacing:"-0.03em",color:c.slate900,lineHeight:1.12 }}>
            A Full-Funnel Workflow,{" "}
            <span style={{ fontFamily:serif,fontStyle:"italic",fontWeight:400,background:`linear-gradient(135deg, ${c.violet}, ${c.indigo}, ${c.violetLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>
              Managed Without You.
            </span>
          </h2>
          <p style={{ marginTop:20,fontSize:17,color:c.slate500,lineHeight:1.6,fontFamily:sans }}>
            Get better results without increasing headcount.
          </p>
        </div>

        <div style={{ marginTop:56,display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:20,maxWidth:1100,marginLeft:"auto",marginRight:"auto" }}>
          {wSteps.map((s)=>{
            const I = s.icon;
            return (
              <div key={s.n} style={{
                display:"flex",flexDirection:"column",borderRadius:20,background:"#fff",padding:"28px 28px",
                boxShadow:"0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)",
                transition:"all 0.3s", cursor:"default"
              }}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 12px 40px rgba(124,58,237,0.08), 0 0 0 1px rgba(124,58,237,0.08)";e.currentTarget.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow="0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)";e.currentTarget.style.transform="translateY(0)"}}
              >
                <div style={{ display:"flex",alignItems:"center",gap:14 }}>
                  <span style={{ fontSize:12,fontWeight:700,letterSpacing:"0.08em",color:c.violet,fontFamily:sans }}>{s.n}</span>
                  <div style={{ width:44,height:44,borderRadius:14,background:"#f5f3ff",display:"flex",alignItems:"center",justifyContent:"center" }}>
                    <I size={22} color={c.violet} strokeWidth={1.8} />
                  </div>
                </div>
                <h3 style={{ marginTop:20,fontSize:16.5,fontWeight:600,color:c.slate900,fontFamily:sans }}>{s.t}</h3>
                <p style={{ marginTop:10,fontSize:14.5,lineHeight:1.7,color:c.slate500,fontFamily:sans }}>{s.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// FEATURES TABS
// ══════════════════════════════════════
const fTabs = [
  { l:"B2B Lead Database", id:"b2b" },
  { l:"Deep Enrichment", id:"en" },
  { l:"Omnichannel Inbox", id:"in" },
  { l:"Intent & Trigger Outbound", id:"it" },
  { l:"Deliverability & Warmup", id:"dw" },
];
const fData = {
  b2b:{ t:"A Database of 700M+ Verified B2B Contacts", d:"Access a vast pool of verified B2B contacts, tailored to specific use cases like local businesses and e-commerce stores. Perfect for targeting leads with precision at scale." },
  en:{ t:"Deep Enrichment With 50+ Data Points", d:"Automatically enrich every lead with firmographic, technographic, and social data. Get the full picture before you ever reach out." },
  in:{ t:"Unified Omnichannel Inbox", d:"Manage email, LinkedIn, and SMS responses from a single unified inbox with AI-powered categorization and smart replies." },
  it:{ t:"Intent Signals & Trigger-Based Outbound", d:"Detect buying signals like job changes, funding rounds, and tech adoption to time your outreach for maximum relevance." },
  dw:{ t:"Automated Deliverability & Warmup", d:"Protect your sender reputation with automated email warmup, domain health monitoring, and spam score tracking." },
};

function Features() {
  const [a,sA] = useState("b2b");
  const ct = fData[a];
  return (
    <section style={{ padding:"100px 0",background:"#fff" }}>
      <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 32px" }}>
        <div style={{ maxWidth:700,margin:"0 auto",textAlign:"center" }}>
          <p style={{ fontSize:14,fontWeight:600,color:c.violet,letterSpacing:"0.04em",textTransform:"uppercase",marginBottom:16,fontFamily:sans }}>Features</p>
          <h2 style={{ fontFamily:sans,fontSize:"clamp(30px,4.5vw,44px)",fontWeight:700,letterSpacing:"-0.03em",color:c.slate900,lineHeight:1.12 }}>
            Innovation at Every Stage{" "}
            <span style={{ fontFamily:serif,fontStyle:"italic",fontWeight:400,color:c.slate900 }}>of the</span>{" "}
            <span style={{ fontFamily:serif,fontStyle:"italic",fontWeight:400,background:`linear-gradient(135deg, ${c.violet}, ${c.indigo}, ${c.violetLight})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text" }}>Outbound Cycle</span>
          </h2>
        </div>

        {/* Tabs */}
        <div style={{ marginTop:44,display:"flex",flexWrap:"wrap",justifyContent:"center",gap:8 }}>
          {fTabs.map(t=>(
            <button key={t.id} onClick={()=>sA(t.id)} style={{
              borderRadius:9999,padding:"10px 20px",fontSize:14,fontWeight:500,border:"none",cursor:"pointer",fontFamily:sans,transition:"all 0.25s",
              background:a===t.id?`linear-gradient(135deg, ${c.violet}, ${c.violetDark})`:"#f1f5f9",
              color:a===t.id?"#fff":c.slate600,
              boxShadow:a===t.id?`0 4px 16px rgba(124,58,237,0.3)`:"none"
            }}>{t.l}</button>
          ))}
        </div>

        {/* Content Panel */}
        <div style={{ maxWidth:980,margin:"44px auto 0" }}>
          <div style={{
            minHeight:440,borderRadius:28,background:c.slate50,padding:"56px 48px",
            display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
            boxShadow:"0 20px 60px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.02)",
            transition:"all 0.3s"
          }}>
            <h3 style={{ fontSize:"clamp(20px,3vw,28px)",fontWeight:700,color:c.slate900,textAlign:"center",fontFamily:sans }}>{ct.t}</h3>
            <p style={{ marginTop:16,maxWidth:560,textAlign:"center",fontSize:15.5,lineHeight:1.7,color:c.slate500,fontFamily:sans }}>{ct.d}</p>
            {/* Dashboard placeholder */}
            <div style={{ marginTop:40,width:"100%",maxWidth:680,height:200,borderRadius:20,background:`linear-gradient(135deg, #ede9fe 0%, #e0e7ff 50%, #f5f3ff 100%)`,display:"flex",alignItems:"center",justifyContent:"center",border:`1px solid ${c.violetPale}` }}>
              <div style={{ display:"flex",gap:24,alignItems:"center" }}>
                {[Search,Database,Send].map((Ic,i)=>(
                  <div key={i} style={{ width:56,height:56,borderRadius:16,background:"rgba(255,255,255,0.7)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                    <Ic size={24} color={c.violet} strokeWidth={1.6} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// FINAL CTA
// ══════════════════════════════════════
function FinalCTA() {
  return (
    <section style={{ position:"relative",overflow:"hidden",background:`linear-gradient(135deg, ${c.slate900} 0%, #1a0e33 40%, ${c.violetDeep} 100%)`,padding:"108px 0" }}>
      {/* Decorative */}
      <div style={{ position:"absolute",right:"-10%",top:"-30%",width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",pointerEvents:"none" }}/>
      <div style={{ position:"absolute",left:"-15%",bottom:"-40%",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",pointerEvents:"none" }}/>

      <div style={{ position:"relative",zIndex:1,maxWidth:1200,margin:"0 auto",padding:"0 32px" }}>
        <div style={{ maxWidth:640,margin:"0 auto",display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center" }}>
          <h2 style={{ fontFamily:sans,fontSize:"clamp(32px,5vw,52px)",fontWeight:700,letterSpacing:"-0.03em",color:"#fff",lineHeight:1.12 }}>
            Ready to Hire Monara and Scale Your Revenue?
          </h2>
          <p style={{ marginTop:20,fontSize:18,color:"rgba(196,181,253,0.7)",lineHeight:1.6,fontFamily:sans }}>
            Equip your business with the ultimate AI co-founder today.
          </p>
          <div style={{ marginTop:40,display:"flex",gap:14,flexWrap:"wrap",justifyContent:"center" }}>
            <a href="#" style={{ height:52,padding:"0 36px",borderRadius:9999,background:"#fff",color:c.violetDark,fontSize:15,fontWeight:600,display:"inline-flex",alignItems:"center",boxShadow:"0 8px 32px rgba(0,0,0,0.2)",transition:"all 0.2s",fontFamily:sans }}>
              Start 14-Day Trial
            </a>
            <a href="#" style={{ height:52,padding:"0 36px",borderRadius:9999,background:"transparent",color:"#fff",fontSize:15,fontWeight:600,display:"inline-flex",alignItems:"center",border:"1.5px solid rgba(255,255,255,0.2)",transition:"all 0.2s",fontFamily:sans }}>
              Talk to Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// FOOTER
// ══════════════════════════════════════
const fLinks = { Product:["Features","Pricing","Changelog","Integrations"], Company:["About","Blog","Careers","Contact"], Legal:["Privacy","Terms","Security"] };

function Footer() {
  return (
    <footer style={{ background:c.slate900,borderTop:"1px solid rgba(255,255,255,0.05)",padding:"56px 0 40px" }}>
      <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 32px" }}>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:40 }}>
          <div>
            <div style={{ display:"flex",alignItems:"center",gap:10 }}>
              <div style={{ width:30,height:30,borderRadius:9,background:`linear-gradient(135deg, ${c.violet}, ${c.indigo})`,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <span style={{ fontSize:12,fontWeight:700,color:"#fff",fontFamily:sans }}>M</span>
              </div>
              <span style={{ fontSize:16,fontWeight:600,color:"#fff",fontFamily:sans }}>Monara</span>
            </div>
            <p style={{ marginTop:16,fontSize:13.5,lineHeight:1.65,color:c.slate400,fontFamily:sans }}>The AI co-founder for<br/>revenue growth.</p>
          </div>
          {Object.entries(fLinks).map(([cat,links])=>(
            <div key={cat}>
              <h4 style={{ fontSize:13,fontWeight:600,color:"#fff",letterSpacing:"0.02em",fontFamily:sans }}>{cat}</h4>
              <ul style={{ marginTop:16,listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:10 }}>
                {links.map(l=><li key={l}><a href="#" style={{ fontSize:13.5,color:c.slate400,fontFamily:sans,transition:"color 0.2s" }}>{l}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop:48,borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:28,textAlign:"center",fontSize:13,color:c.slate500,fontFamily:sans }}>
          © 2026 Monara AI Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ══════════════════════════════════════
// APP
// ══════════════════════════════════════
export default function MonaraLanding() {
  return (
    <div style={{ minHeight:"100vh",background:"#fff" }}>
      <style>{css}</style>
      <Header />
      <main>
        <Hero />
        <Architects />
        <InteractiveDemo />
        <Workflow />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
