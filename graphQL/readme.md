## for start
1:bash
npm start
2:bash
npm run servers

## getplaylists
{
  playlists{
    name,
    ganre,
  }
}
## gettraks
{
  tracks {
    name
    band
    starts_count
  }
}
## getplaylistbyId
{
  playlist(id: "n"){
    name,
    ganre,
    track
  }
}
## gettrackbyId
{
  track(id: "n"){
    playlistId
    name
    band
    starts_count
  }
}
## addplaylist{
  mutation{
    addPlaylists(name: "name", ganre: "ganre") {
      name,
      ganre
    }
  }
}