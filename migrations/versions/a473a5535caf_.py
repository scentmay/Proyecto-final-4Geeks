"""empty message

Revision ID: a473a5535caf
Revises: f9c44199b1f4
Create Date: 2022-08-31 04:34:28.715026

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'a473a5535caf'
down_revision = 'f9c44199b1f4'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('cliente', 'peso',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=20),
               existing_nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('cliente', 'peso',
               existing_type=sa.Float(precision=20),
               type_=sa.REAL(),
               existing_nullable=False)
    # ### end Alembic commands ###
