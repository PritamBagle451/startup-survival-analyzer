
export default function ReportCard(props){
    return (
<>
<section className="report-card">
    <h2>🚀 Startup Survival Report</h2>
    <div className="report-grid">
        <div className="card">
            <h3>🦄 Unicorn Chance</h3>
            <p>{props.chance}</p>
        </div>
        <div className="card">
            <h3>💀 Collapse Risk</h3>
            <p>{props.risk}</p>
        </div>
        <div className="card">
            <h3>🤖 AI Pivot Probability</h3>
            <p>{props.ai}</p>
        </div>
        <div className="card">
            <h3>☕ Founder Stability</h3>
            <p>{props.stability}</p>
        </div>
    </div>
    <div className="final-verdict">
        <h3>📈 Final Verdict</h3>
        <p>
            This startup may become a billion-dollar
            company or disappear after one motivational
            LinkedIn post.
        </p>
    </div>
</section>
</>
)
}