hexo.extend.filter.register('before_post_render', function(data) {
  data.content = data.content.replace(/^ +/gm, function(match) {
    return Array(match.length).fill("&nbsp;").join("");
  })
  data.content = data.content.replace(/^\> ( +)/gm, function(match, p1) {
    return "> " + Array(p1.length).fill("&nbsp;").join("");
  })
  return data;
});