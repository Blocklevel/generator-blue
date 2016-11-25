import events from './events'

/**
 * <%= name %> mutations
 */
export default {<%
eventsList.forEach(function(event, i){ %>
  [events.<%= event %>] (state, payload) {

  }<%= i !== eventsList.length - 1 ? ',' : '' %><% }); %>
}
