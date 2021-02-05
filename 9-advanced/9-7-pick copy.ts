{
  type Video = {
    id : string,
    title : string,
    url: string,
    data: string
  }

  // 원하는 키만 뽑아서 새로 만든다.
  type VideoMetadata= Pick<Video,'id'|'title'>;

  function getVideo(id:string):Video{
    return{
      id,
      data:'asd',
      title:'asd',
      url:'asd'
    }
  }

  function getVideoMetadata(id:string): VideoMetadata{
    return{
      id:id,
      title:'asd',
    }
  }

}