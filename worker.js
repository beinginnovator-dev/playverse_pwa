export class GameRoom {
  constructor(state, env) { this.state=state; this.env=env; }
  async fetch(request) {
    const url=new URL(request.url);
    if(url.pathname==='/health') return new Response(JSON.stringify({ok:true}),{headers:{'content-type':'application/json'}});
    return new Response('PlayVerse room ready');
  }
}
export default {
  async fetch(request, env) {
    const url=new URL(request.url);
    if(url.pathname.startsWith('/room/')){
      const id=env.GAME_ROOMS.idFromName(url.pathname.split('/')[2]||'default');
      return env.GAME_ROOMS.get(id).fetch(request);
    }
    return env.ASSETS.fetch(request);
  }
};