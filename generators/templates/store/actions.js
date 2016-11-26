import events from './events'

/**
 * <%= name %> actions
 */
export default {<%
eventsList.forEach(function(event, i){ %>
  [events.<%= event %>]: ({ commit }, payload) => {
    commit(events.<%= [event] %>, payload)
  }<%= i !== eventsList.length - 1 ? ',' : '' %><% }); %><%
if (eventsList.length === 0) { %>
  // [events.GET_POST]: ({ commit }, payload) => {
  //   commit(events.GET_POST, payload)
  // }<% } %>
}
