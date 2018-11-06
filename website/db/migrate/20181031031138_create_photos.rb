class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :description
      t.string :category
      t.string :client
      t.string :caption
      t.date :date

      t.timestamps
    end
  end
end
