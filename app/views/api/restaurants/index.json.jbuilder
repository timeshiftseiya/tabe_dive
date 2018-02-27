json.set! :restaurants do
  json.array! @restaurants do |restaurant|
    json.extract! restaurant, :id, :name, :on_foot, :description, :image_url
  end
end