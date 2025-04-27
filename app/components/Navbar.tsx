function HobbyList() {
  const [hobbyList, setHobbyList] = useState(hobbies);

  const shuffleList = () => {
    const shuffledHobbies = [...hobbyList];
    for (let i = shuffledHobbies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledHobbies[i], shuffledHobbies[j]] = [shuffledHobbies[j], shuffledHobbies[i]];
    }
    setHobbyList(shuffledHobbies);
  };

  return (
    <div>
      <button
        onClick={shuffleList}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        aria-label="Shuffle hobbies list"
        accessKey="s" // Keyboard shortcut for Shuffle button
      >
        Shuffle List
      </button>
      <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] mt-6">
        {hobbyList.map(hobby => (
          <li key={hobby.id} className="mb-2 tracking-[-.01em]">
            {hobby.name}
          </li>
        ))}
      </ol>
    </div>
  );
}
