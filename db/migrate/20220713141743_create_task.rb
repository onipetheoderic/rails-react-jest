class CreateTask < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.text :description, null: false
      t.string :avatar, default: "https://i.ibb.co/njXZjCG/user-1.png", null: false
      t.string :time
      t.boolean :checked, default: false
      t.timestamps
    end
  end
end
 