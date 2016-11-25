/**
 * <%= name %> events
 */
export default {<%
eventsList.forEach(function(event, i){ %>
  <%= event %>: '<%= name %>/<%= event %>'<%= i !== eventsList.length - 1 ? ',' : '' %><% }); %>
}
