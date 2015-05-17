set :css_dir, 'assets/styles'

set :js_dir, 'assets/scripts'

set :images_dir, 'assets/images'

set :fonts_dir, 'assets/fonts'

configure :development do
  activate :asset_hash
  
  activate :directory_indexes
end

configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  activate :asset_hash

  # Use relative URLs
  activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

sprockets.append_path File.join root, 'bower_components'