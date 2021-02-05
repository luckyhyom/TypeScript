{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high'|'low';
  };

  // 타입을 받는게 아니라, 타입안에 들어있는 키값만 받는다!
  // 코드전체를 {}안에 넣어놓으니까 다른 파일이랑도 연결이 되는거같네 함수명 중복 안되는게
  function updateTodo2(todo: ToDo, fieldsToUpdate: Partial<ToDo>):ToDo{
    return {...todo,...fieldsToUpdate};
  }

  const todo: ToDo = {
    title: 'learn',
    description:'exam',
    label:'s',
    priority:'high'
  }
  const update = updateTodo2(todo,{priority:'low'});
  console.log(update)


}