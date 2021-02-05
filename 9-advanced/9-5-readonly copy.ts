{
  type ToDo = {
    title:string;
    description:string;
  }

  function display2(todo:Readonly<ToDo>):string{
    // todo.title = 'jaja';
    return todo.title;
  }
}