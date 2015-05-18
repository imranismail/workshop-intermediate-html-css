set :css_dir, 'assets/styles'

set :js_dir, 'assets/scripts'

set :images_dir, 'assets/images'

set :fonts_dir, 'assets/fonts'

activate :autoprefixer

activate :asset_hash

activate :directory_indexes

configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Use relative URLs
  activate :relative_assets
  
  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

sprockets.append_path File.join root, 'bower_components'