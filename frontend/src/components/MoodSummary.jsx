export default function MoodSummary({ counts }) {
	return (
		<div className="flex justify-around text-center text-xl">
			<div>
				<span className="text-3xl">😃</span>
				<br />
				{counts.happy}
			</div>
			<div>
				<span className="text-3xl">😐</span>
				<br />
				{counts.neutral}
			</div>
			<div>
				<span className="text-3xl">😞</span>
				<br />
				{counts.sad}
			</div>
		</div>
	);
}
