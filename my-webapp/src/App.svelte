<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from './routes/Home.svelte'
  import Projects from './routes/Projects.svelte'
  export let url = "";
</script>

<Router url="{url}">
  <nav>
    <Link to="/">Home</Link>
    <Link to='/Projects'>Projects</Link>
  </nav>
  <div class='navbar'>
    <Route path="Home" component="{Home}" />
    <Route path='Projects' component = '{Projects}'/>
  </div>
</Router>

<style>

</style>