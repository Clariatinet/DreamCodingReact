import React, { useState } from 'react';

const Test = () => {
  const [person, setPerson] = useState(initialState);

  const handleChangeName = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 어떻게 바꾸고 싶은가요?`);
    setPerson({
      ...person,
      mentors: [
        ...person.mentors.map((mentor) => {
          if (prev === mentor.name) {
            return { ...mentor, name: current };
          }
          return mentor;
        }),
      ],
    });
  };
  const handleAdd = () => {
    const name = prompt(`이름이 무엇인가요?`);
    const title = prompt(`직함이 무엇인가요?`);
    setPerson({ ...person, mentors: [...person.mentors, { name, title }] });
  };
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하시겠나요?`);
    setPerson({
      ...person,
      mentors: [
        ...person.mentors.filter((mentor) => {
          return mentor.name !== name;
        }),
      ],
    });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor) => {
          return (
            <li key={mentor.id}>
              {mentor.name} ({mentor.title})
            </li>
          );
        })}
      </ul>
      <button onClick={handleChangeName}>멘토의 이름 바꾸기</button>
      <button onClick={handleAdd}>멘토 추가하기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
};

export default Test;

const initialState = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어 개발자',
      id: 1,
    },
    {
      name: '제임스',
      title: '시니어 개발자',
      id: 2,
    },
  ],
};
