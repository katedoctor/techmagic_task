const axios = require('axios')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');


const TrackType = new GraphQLObjectType({
  name: 'tracks',
  fields: () => ({
    id: { type: GraphQLString },
    playlistId: { type: GraphQLString },
    name: { type: GraphQLString },
    band: { type: GraphQLString },
    starts_count: {type : GraphQLInt}
  })
})

const PlaylistType = new GraphQLObjectType({
    name: 'playlists',
    fields:()=> ({
      id: { type: GraphQLString},
      name: {type: GraphQLString},
      tracks: {type: TrackType},
      ganre: {type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    playlist: {
      type: PlaylistType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return axios.get('http://localhost:3000/playlists/' + args.id)
           .then(res => res.data);
      }
    },
    playlists: {
      type: new GraphQLList(PlaylistType),
      resolve(parentValue, args) {
        return axios.get('http://localhost:3000/playlists')
          .then(res => res.data)
      }
    },
    tracks: {
      type: new GraphQLList(TrackType),
      resolve(parentValue, args) {
        return axios.get('http://localhost:3000/tracks')
          .then(res => res.data);
      }
    },
    // trackByPlaylistId: {
    //   type: TrackType,
    //   args: {
    //     id: { type: GraphQLString }
    //   },
    //   resolve(parentValue, args) {
    //     return axios.get('http://localhost:3000/tracks')
    //       .then(res => {
    //         if(res.data.playlistId === args.id) {
    //           return res.data
    //         }
    //       } );
    //   }
    // },
    track: {
      type: TrackType,
      args: {
        id: { type: GraphQLString }
      },
      resolve(parentValue, args) {
        return axios.get('http://localhost:3000/tracks/' + args.id)
          .then(res => res.data);
      }
    },
  }
})

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addPlaylist: {
      type: PlaylistType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        ganre: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parentValue, args) {
        return axios.post('http://localhost:3000/playlists', {
          name: args.name,
          ganre: args.ganre
        })
          .then(res => res.data);
      }
    },
    deletePlaylist: {
      type: PlaylistType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parentValue, args) {
        return axios.delete('http://localhost:3000/playlists/' + args.id)
          .then(res => res.data);
      }
    },
    addTrack: {
      type: TrackType,
      args: {
        playlistId: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        band: { type: new GraphQLNonNull(GraphQLString) },
        starts_count: { type: new GraphQLNonNull(GraphQLInt) },
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation
})

