class Api::RestaurantsController < ApplicationController
  before_action :authenticate_user!
  def index
    @restaurants = Restaurant.all
  end

  def create
    @restaurant = Restaurant.new(parmas_restaurant)
    @restaurant.save
  end

  def update
    @restaurant = Restaurant.find(params[:id])
    @restaurant.update(parmas_restaurant)
  end

  private

  def parmas_restaurant
    params.fetch(:restaurant, {}).permit(
          :name, :on_foot, :description, :image_url
      )
  end
end