export default function EmojiButton({ emoji, label, onClick }) {
	return (
		<button
			onClick={onClick}
			aria-label={label}
			className="text-4xl p-4 rounded-full hover:bg-gray-200 transition"
		>
			{emoji}
		</button>
	);
}
