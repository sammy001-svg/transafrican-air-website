// Reusable component for character stagger animation on button text
export const StaggeredText = ({ text, delay = 0.01 }: { text: string; delay?: number }) => (
  <>
    {text.split("").map((char, index) => (
      <span
        key={index}
        className="char-stagger"
        style={{
          animationDelay: `${index * delay}s`,
        }}
      >
        {char}
      </span>
    ))}
  </>
)
