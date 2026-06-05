import React from 'react';
import {motion} from 'motion/react';
import {
  Archive,
  BarChart3,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronRight,
  ClipboardList,
  Database,
  FileSpreadsheet,
  FileText,
  FolderClosed,
  GraduationCap,
  Layers3,
  LineChart,
  Mail,
  Network,
  PanelRightOpen,
  PlaySquare,
  Route,
  Search,
  Settings2,
  SquareStack,
  Target,
  Workflow,
} from 'lucide-react';
import {bloom, ease} from '../motion';

export const FloatingKnowledge: React.FC<{frame: number; dense?: boolean}> = ({frame, dense = false}) => {
  const assets = [
    ['SOP', FileText, 1120, 210, -7],
    ['Budget.xlsx', FileSpreadsheet, 1385, 325, 6],
    ['Folder', FolderClosed, 1010, 530, 4],
    ['Email', Mail, 1510, 530, -5],
    ['Policy', BookOpen, 1240, 690, 8],
    ['Checklist', ClipboardList, 1600, 230, 10],
  ] as const;

  return (
    <div className={dense ? 'floating-knowledge dense' : 'floating-knowledge'}>
      {assets.map(([label, Icon, left, top, rotate], index) => {
        const drift = Math.sin((frame + index * 19) / 33) * (dense ? 9 : 18);
        const scale = 0.86 + bloom(frame, 30, index * 5) * 0.14;
        return (
          <motion.div
            key={label}
            className="knowledge-card"
            style={{left, top: top + drift, transform: `rotate(${rotate}deg) scale(${scale})`}}
          >
            <Icon size={34} />
            <strong>{label}</strong>
            <span />
            <span />
          </motion.div>
        );
      })}
    </div>
  );
};

export const EnterpriseDashboard: React.FC<{frame: number; active?: number; scale?: number; mode?: 'repository' | 'hero'}> = ({
  frame,
  active = 0,
  scale = 1,
  mode = 'repository',
}) => {
  const departments = ['Acquisitions', 'Underwriting', 'Accounting', 'Asset Mgmt', 'Investor Rel.', 'Operations'];
  const camera = Math.sin(frame / 70) * 8;

  return (
    <motion.div className={`enterprise-dashboard ${mode}`} style={{transform: `translate(${camera}px, ${-camera * 0.45}px) scale(${scale})`}}>
      <aside>
        <div className="product-mark">
          <Database size={24} />
          <span>PMS</span>
        </div>
        {departments.map((department, index) => (
          <div className={index === active ? 'side-item active' : 'side-item'} key={department}>
            <Layers3 size={18} />
            <span>{department}</span>
          </div>
        ))}
      </aside>
      <main>
        <header>
          <div>
            <small>Operational Knowledge Repository</small>
            <strong>Process Map Solutions</strong>
          </div>
          <div className="search-box">
            <Search size={18} />
            <span>Find process, task, SOP...</span>
          </div>
        </header>
        <div className="kpi-strip">
          {[
            ['Departments', '08'],
            ['Workflows', mode === 'hero' ? '186' : '142'],
            ['Activities', mode === 'hero' ? '1,684' : '1,248'],
          ].map(([label, value]) => (
            <div className="kpi" key={label}>
              <b>{value}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <RepositoryMap frame={frame} expanded={mode === 'hero'} />
      </main>
    </motion.div>
  );
};

export const RepositoryMap: React.FC<{frame: number; expanded?: boolean}> = ({frame, expanded = false}) => {
  const pulse = 0.65 + Math.sin(frame / 14) * 0.22;
  const items = ['Screen Deal', 'Diligence', 'IC Approval', 'Close Asset', 'Onboard'];

  return (
    <div className={expanded ? 'repository-map expanded' : 'repository-map'}>
      <div className="repo-track" />
      {items.map((item, index) => (
        <div className={index === 0 ? 'repo-node root' : 'repo-node'} key={item} style={{left: 42 + index * 148, top: 62 + (index % 2) * 88}}>
          <Route size={16} />
          <span>{item}</span>
        </div>
      ))}
      {[0, 1, 2, 3].map((index) => (
        <div className="repo-link" key={index} style={{left: 168 + index * 148, top: 97 + (index % 2) * 45}} />
      ))}
      <div className="repo-detail" style={{opacity: pulse}}>
        <PanelRightOpen size={20} />
        SOP + Owner + Control
      </div>
    </div>
  );
};

export const FlowRail: React.FC<{frame: number; labels: string[]}> = ({frame, labels}) => (
  <div className="flow-rail">
    {labels.map((label, index) => {
      const Icon = [Search, SquareStack, Check, Settings2][index];
      return (
        <React.Fragment key={label}>
          <motion.div className="flow-step" style={{opacity: bloom(frame, 30, index * 9), transform: `scale(${0.92 + bloom(frame, 30, index * 9) * 0.08})`}}>
            <Icon size={34} />
            <span>{label}</span>
          </motion.div>
          {index < labels.length - 1 && <ChevronRight className="flow-chevron" size={28} />}
        </React.Fragment>
      );
    })}
  </div>
);

export const LargeProcessSystem: React.FC<{frame: number; zoom?: number; branchFocus?: boolean}> = ({frame, zoom = 1, branchFocus = false}) => {
  const panX = ease(frame, [0, 210], [0, -280]);
  const panY = branchFocus ? ease(frame, [0, 180], [0, -90]) : 0;
  const nodes = ['Portfolio Ops', 'Acquire', 'Underwrite', 'Approve', 'Close', 'Account', 'Report', 'Optimize', 'Maintain'];
  return (
    <motion.div className="large-process-system" style={{transform: `translate(${panX}px, ${panY}px) scale(${zoom})`}}>
      {nodes.map((node, index) => (
        <div className={index === 0 ? 'system-node anchor' : 'system-node'} key={node} style={{left: 90 + index * 230, top: 175 + (index % 3) * 135}}>
          <Workflow size={18} />
          <span>{node}</span>
        </div>
      ))}
      {nodes.slice(1).map((node, index) => (
        <div className="system-edge" key={node} style={{left: 255 + index * 230, top: 224 + (index % 3) * 62}} />
      ))}
    </motion.div>
  );
};

export const ResourceDrawer: React.FC<{frame: number}> = ({frame}) => {
  const resources = [
    ['SOPs', FileText],
    ['Videos', PlaySquare],
    ['Training Materials', GraduationCap],
    ['Templates', Archive],
    ['Instructions', ClipboardList],
  ] as const;
  return (
    <motion.div className="resource-drawer" style={{transform: `translateX(${ease(frame, [4, 38], [420, 0])}px)`}}>
      <div className="drawer-title">
        <PanelRightOpen size={28} />
        <strong>Knowledge Panel</strong>
      </div>
      {resources.map(([label, Icon], index) => (
        <div className="resource-line" key={label} style={{opacity: bloom(frame, 30, 18 + index * 5)}}>
          <Icon size={26} />
          <span>{label}</span>
          <Check size={20} />
        </div>
      ))}
    </motion.div>
  );
};

export const Outcomes: React.FC<{frame: number}> = ({frame}) => {
  const list = [
    ['Training', GraduationCap],
    ['Knowledge Transfer', BookOpen],
    ['Operational Visibility', BarChart3],
    ['AI Readiness', Bot],
    ['Process Optimization', LineChart],
    ['Outsourcing Readiness', BriefcaseBusiness],
  ] as const;
  return (
    <div className="outcomes-grid">
      {list.map(([label, Icon], index) => (
        <motion.div className="outcome-tile" key={label} style={{opacity: bloom(frame, 30, index * 5), transform: `translateY(${(1 - bloom(frame, 30, index * 5)) * 28}px)`}}>
          <Icon size={38} />
          <span>{label}</span>
        </motion.div>
      ))}
    </div>
  );
};

export const CoverageGrid: React.FC<{frame: number}> = ({frame}) => {
  const coverage = ['Acquisitions', 'Underwriting', 'Accounting', 'Asset Management', 'Investor Relations', 'Administration', 'Marketing', 'Operations'];
  return (
    <div className="coverage-matrix">
      {coverage.map((item, index) => (
        <motion.div className="coverage-cell" key={item} style={{opacity: bloom(frame, 30, index * 4), transform: `scale(${0.94 + bloom(frame, 30, index * 4) * 0.06})`}}>
          <Building2 size={24} />
          <span>{item}</span>
        </motion.div>
      ))}
    </div>
  );
};

export const ConvergenceCore: React.FC<{frame: number}> = ({frame}) => {
  const collapse = ease(frame, [10, 115], [1, 0]);
  const core = bloom(frame, 30, 36);
  return (
    <div className="convergence-core">
      <FloatingKnowledge frame={frame} dense />
      <motion.div className="system-core" style={{opacity: core, transform: `scale(${0.82 + core * 0.18})`}}>
        <Target size={48} />
        <strong>Structured System</strong>
      </motion.div>
      <div className="converge-line line-a" style={{transform: `scaleX(${1 - collapse})`}} />
      <div className="converge-line line-b" style={{transform: `scaleX(${1 - collapse})`}} />
      <div className="converge-line line-c" style={{transform: `scaleX(${1 - collapse})`}} />
    </div>
  );
};
