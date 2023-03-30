import React, { useCallback, useReducer, useState } from 'react';
import Button from './components/Button';
import personReducer from './reducer/person.reducer';

const AppMentorsButton = () => {
  // 중첩 객체에서 사용하면 좋음.
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleUpdate = useCallback(() => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: 'updated', prev, current });
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt(`멘토의 이름은?`);
    const title = prompt(`멘토의 직함은?`);
    dispatch({ type: 'added', name, title });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);
    dispatch({ type: 'deleted', name });
  }, []);

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
      <Button text='멘토 이름 바꾸기' onClick={handleUpdate} />
      <Button text='멘토 추가하기' onClick={handleAdd} />
      <Button text='삭제하기' onClick={handleDelete} />
    </div>
  );
};

export default AppMentorsButton;

const initialPerson = {
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
