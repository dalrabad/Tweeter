class CreatePosts < ActiveRecord::Migration[5.1]
  def change
    create_table :posts do |t|
      t.string :name
      t.text :body
      t.text :image
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
