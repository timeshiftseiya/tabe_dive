class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.time :on_foot
      t.string :description

      t.timestamps
    end
  end
end
