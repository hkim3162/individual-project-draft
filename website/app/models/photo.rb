class Photo < ApplicationRecord
  has_one_attached :raw_image
end
