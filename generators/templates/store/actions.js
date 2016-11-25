import events from './events'

/**
 * <%= name %> actions
 */
export default {<%
eventsList.forEach(function(event, i){ %>
  [events.<%= event %>]: ({ commit }, payload) => {
    commit(events.<%= [event] %>, payload)
  }<%= i !== eventsList.length - 1 ? ',' : '' %><% }); %>
}
