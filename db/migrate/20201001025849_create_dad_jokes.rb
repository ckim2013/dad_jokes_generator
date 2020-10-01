class CreateDadJokes < ActiveRecord::Migration[6.0]
  def change
    create_table :dad_jokes do |t|
      t.string :joke
    end
  end
end
